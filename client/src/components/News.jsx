import React from "react";

const News = () => {
  const newsData = [
    { id: 1, date: "14 MAR", title: "Generative AI & Cloud Workshop", dept: "CSE" },
    { id: 2, date: "12 MAR", title: "Semi-Conductor Lab Inauguration", dept: "ECE" },
    { id: 3, date: "10 MAR", title: "Record 150+ Students Placed", dept: "ALITS" },
    { id: 4, date: "08 MAR", title: "Structural Sustainability Seminar", dept: "Civil" },
  ];

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      {/* SECTION TITLE - Larger and Bolder */}
      <h2 className="text-xl font-black uppercase tracking-[0.3em] text-black mb-12 border-b-2 border-black pb-4">
        Campus Updates
      </h2>

      <div className="flex flex-col">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="group border-b border-gray-200 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-gray-50 transition-colors px-4"
          >
            <div className="flex items-center gap-8">
              {/* DATE - High Contrast */}
              <span className="text-lg font-bold text-gray-900 min-w-[80px]">
                {news.date}
              </span>

              {/* TITLE - Increased size and Pure Black */}
              <div className="flex flex-col">
                <span className="text-xs font-black text-[#B8860B] uppercase tracking-widest mb-1">
                  {news.dept}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-black group-hover:text-[#B8860B] transition-colors">
                  {news.title}
                </h3>
              </div>
            </div>

            {/* ACTION - Simple but visible */}
            <span className="text-sm font-black text-black uppercase tracking-tighter hidden md:block group-hover:translate-x-2 transition-transform">
              Read More →
            </span>
          </div>
        ))}
      </div>

      {/* FOOTER BUTTON - Higher Visibility */}
      <div className="mt-16">
        <button className="bg-black text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-[#B8860B] transition-colors rounded-none">
          View All News
        </button>
      </div>
    </section>
  );
};

export default News;