import React from "react";
import { MapPin, Sparkles, Flame, Clock, Plus } from "lucide-react";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Presto 2K26: Annual Fest",
      date: "MAR 25",
      loc: "Main Auditorium",
      img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
      label: "HOT",
      labelColor: "text-orange-500",
      icon: <Flame size={10} />
    },
    {
      id: 2,
      title: "IoT & Smart Systems Symposium",
      date: "MAR 28",
      loc: "Research Wing",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      label: "NEW",
      labelColor: "text-emerald-500",
      icon: <Sparkles size={10} />
    },
    {
      id: 3,
      title: "Inter-College Sports Meet",
      date: "APR 02",
      loc: "Sports Ground",
      img: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=800",
      label: "UPCOMING",
      labelColor: "text-blue-500",
      icon: <Clock size={10} />
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      {/* HEADER: No buttons here either, just a clean line */}
      <div className="flex items-center justify-between mb-20">
        <div className="space-y-1">
          <h2 className="text-5xl font-serif font-light text-gray-900 tracking-tighter">
            Selected <span className="italic text-[#B8860B]">Events</span>
          </h2>
          <div className="h-[1px] w-12 bg-[#B8860B]"></div>
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">
          Scroll to Explore
        </span>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {events.map((event) => (
          <div key={event.id} className="group cursor-pointer relative">

            {/* IMAGE AREA: Hyper-Minimalist */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gray-50">
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-full object-cover grayscale transition-all duration-[1.5s] ease-out group-hover:grayscale-0 group-hover:scale-105"
              />

              {/* MINIMALIST LABEL: No background box, just text and icon */}
              <div className={`absolute top-8 left-8 flex items-center gap-2 ${event.labelColor} font-black text-[9px] tracking-[0.3em]`}>
                {event.icon} {event.label}
              </div>

              {/* FLOATING DATE: Clean typography */}
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-1">{event.date.split(' ')[0]}</p>
                <p className="text-4xl font-serif font-bold leading-none">{event.date.split(' ')[1]}</p>
              </div>

              {/* INTERACTION HINT: Only appears on hover */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Plus className="text-white" size={24} strokeWidth={1} />
              </div>
            </div>

            {/* CONTENT AREA: Pure Typography */}
            <div className="mt-8 space-y-3 px-2">
              <div className="flex items-center gap-2 text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                <MapPin size={10} className="text-[#B8860B]" /> {event.loc}
              </div>

              <h3 className="text-2xl font-serif font-medium text-gray-900 leading-tight transition-all duration-500 group-hover:text-[#B8860B] group-hover:translate-x-1">
                {event.title}
              </h3>

              {/* THE ULTIMATE GHOST "BUTTON": A single, slowly growing line */}
              <div className="pt-4">
                <div className="h-[1px] w-0 bg-[#B8860B]/40 group-hover:w-full transition-all duration-700 ease-in-out"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;