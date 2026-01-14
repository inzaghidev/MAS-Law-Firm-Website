import { useState } from "react";
import portfolioImg1 from "../../assets/reddream-services-partnership.jpeg";
import portfolioImg2 from "../../assets/islamic-book-fair.jpeg";
import portfolioImg3 from "../../assets/pertemuan-strategis-tim-legal.jpeg";
import portfolioImg4 from "../../assets/legal-advisory.jpeg";

export function Portofolio() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: "Kerjasama dengan RedDream Services",
      description: "Konsultasi Hukum Bisnis & Perizinan",
      image: portfolioImg1,
    },
    {
      id: 2,
      title: "Islamic Book Fair Event",
      description: "Legal Advisory & Event Partnership",
      image: portfolioImg2,
    },
    {
      id: 3,
      title: "Konsultasi Tim Legal",
      description: "Pertemuan Strategis dengan Klien Korporat",
      image: portfolioImg3,
    },
    {
      id: 4,
      title: "Layanan Konsultasi Profesional",
      description: "Pendampingan Hukum & Legal Advisory",
      image: portfolioImg4,
    },
  ];

  return (
    <section className="py-24 bg-[#191919] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#191919] via-[#252525] to-[#191919]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-[#AE8737] mb-6"></div>
          <h2 className="mb-4">Rekam Jejak & Portofolio</h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Dipercaya oleh klien dan mitra terkemuka di berbagai industri
          </p>
        </div>

        {/* 2x2 Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#252525] cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-[#191919] via-[#191919]/80 to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="w-12 h-1 bg-[#AE8737] mb-4"></div>
                  <h3 className="text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 mb-4">{item.description}</p>
                  <button className="px-5 py-2 bg-[#AE8737] text-white rounded hover:bg-[#8a6a2b] transition-colors duration-300">
                    Lihat Detail
                  </button>
                </div>
              </div>

              {/* Border effect on hover */}
              <div
                className={`absolute inset-0 border-2 border-[#AE8737] rounded-lg transition-opacity duration-300 pointer-events-none ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
