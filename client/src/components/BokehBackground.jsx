"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

const DEFAULT_COLORS = [
  "rgba(255, 245, 220, 0.55)", // creme
  "rgba(255, 255, 255, 0.50)", // white
  "rgba(255, 210, 170, 0.45)", // soft peach
  "rgba(255, 215, 160, 0.50)", // gold creme
]

export function BokehBackground({
  className,
  children,
  count = 25,
  minSize = 50,
  maxSize = 200,
  speed = 1,
  colors = DEFAULT_COLORS,
}) {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const rect = container.getBoundingClientRect()
    let width = rect.width
    let height = rect.height
    canvas.width = width
    canvas.height = height

    let animationId
    let tick = 0

    const createOrb = () => {
      const size = minSize + Math.random() * (maxSize - minSize)
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3 * speed,
        vy: (Math.random() - 0.5) * 0.3 * speed,
        size,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 0.15 + Math.random() * 0.2,
        pulseOffset: Math.random() * Math.PI * 2,
        pulseSpeed: 0.005 + Math.random() * 0.01,
      }
    }

    const orbs = Array.from({ length: count }, createOrb)
    orbs.sort((a, b) => a.size - b.size)

    const handleResize = () => {
      const rect = container.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width
      canvas.height = height
    }

    const ro = new ResizeObserver(handleResize)
    ro.observe(container)

    const animate = () => {
      tick++
      ctx.clearRect(0, 0, width, height)

      for (const orb of orbs) {
        orb.x += orb.vx
        orb.y += orb.vy

        if (orb.x < -orb.size / 2) orb.x = width + orb.size / 2
        if (orb.x > width + orb.size / 2) orb.x = -orb.size / 2
        if (orb.y < -orb.size / 2) orb.y = height + orb.size / 2
        if (orb.y > height + orb.size / 2) orb.y = -orb.size / 2

        const pulse =
          Math.sin(tick * orb.pulseSpeed + orb.pulseOffset) * 0.1 + 1
        const currentSize = orb.size * pulse

        const gradient = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          currentSize / 2
        )

        gradient.addColorStop(
          0,
          orb.color.replace(/[\d.]+\)$/, `${orb.opacity * 1.2})`)
        )
        gradient.addColorStop(
          0.4,
          orb.color.replace(/[\d.]+\)$/, `${orb.opacity})`)
        )
        gradient.addColorStop(
          0.7,
          orb.color.replace(/[\d.]+\)$/, `${orb.opacity * 0.5})`)
        )
        gradient.addColorStop(1, orb.color.replace(/[\d.]+\)$/, "0)"))

        ctx.beginPath()
        ctx.arc(orb.x, orb.y, currentSize / 2, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        ctx.beginPath()
        ctx.arc(orb.x, orb.y, currentSize / 2 - 2, 0, Math.PI * 2)
        ctx.strokeStyle = orb.color.replace(
          /[\d.]+\)$/,
          `${orb.opacity * 0.3})`
        )
        ctx.lineWidth = 1
        ctx.stroke()
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
      ro.disconnect()
    }
  }, [count, minSize, maxSize, speed, colors])

  return (
    <div
      ref={containerRef}
      className={cn("fixed inset-0 overflow-hidden", className)}
      style={{
        background:
          "linear-gradient(135deg, #f5ebd9 0%, #e6d5b8 40%, #d4be96 100%)",
      }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* soft glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.6) 0%, transparent 50%)",
        }}
      />

      {/* vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(150,130,100,0.3) 100%)",
        }}
      />

      {children && (
        <div className="relative z-10 h-full w-full overflow-y-auto">
          {children}
        </div>
      )}
    </div>
  )
}

export default function BokehBackgroundDemo() {
  return <BokehBackground />
}