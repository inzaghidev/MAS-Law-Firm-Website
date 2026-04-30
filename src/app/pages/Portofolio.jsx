import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import portfolioImg1 from '/pendirian pt pma.jpeg';
import portfolioImg2 from '/klien internasional.jpeg';
import portfolioImg3 from '/pendampingan pemeriksaan bpjs ketenagakerjaan.jpeg';
import portfolioImg4 from '/mediator.jpeg';

export function Portofolio() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedCase, setSelectedCase] = useState(null);

  // Lock body scroll when modal open
  useEffect(() => {
    if (selectedCase) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCase]);

  const portfolioItems = [
    {
      id: 1,
      title: "Pendirian PT PMA",
      description: "Konsultasi Hukum Bisnis & Perizinan",
      image: portfolioImg1,
      detailedDescription:
        "Mendampingi investor asing dalam proses legalitas pendirian badan usaha di Indonesia melalui skema PT PMA. Layanan mencakup konsultasi mengenai pembatasan kepemilikan saham sesuai Daftar Positif Investasi (DPI), pengurusan Nomor Induk Berusaha (NIB) melalui sistem OSS RBA, hingga penyusunan Akta Pendirian dan pengesahan SK Kemenkumham."
    },
    {
      id: 2,
      title: "International Client",
      description: "Legal Advisory & Event Partnership",
      image: portfolioImg2,
      detailedDescription:
        "Memberikan layanan Legal Advisory lintas batas untuk klien internasional yang beroperasi atau mengadakan kegiatan di Indonesia, termasuk penyusunan kontrak, mitigasi risiko hukum, serta pendampingan negosiasi."
    },
    {
      id: 3,
      title: "Pendampingan BPJS Ketenagakerjaan",
      description: "Audit & Compliance Support",
      image: portfolioImg3,
      detailedDescription:
        "Pendampingan hukum dalam pemeriksaan BPJS Ketenagakerjaan untuk memastikan kepatuhan perusahaan terhadap kewajiban ketenagakerjaan dan menghindari sanksi administratif."
    },
    {
      id: 4,
      title: "Mediator",
      description: "Penyelesaian Sengketa Non-Litigasi",
      image: portfolioImg4,
      detailedDescription:
        "Pendampingan dalam proses mediasi untuk mencapai solusi win-win solution bagi para pihak melalui pendekatan negosiasi yang efektif dan efisien."
    }
  ];

  return (
    <section className="py-24 bg-white text-[#191919] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-[#AE8737] mx-auto mb-6"></div>
          <h2 className="text-3xl font-bold mb-4">Rekam Jejak & Portofolio</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Dipercaya oleh klien dari berbagai industri
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedCase(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end transition-opacity ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-slate-300 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {/* Modal */}
<AnimatePresence>
  {selectedCase && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedCase(null)} // klik background untuk close
    >
      <motion.div
        className="relative bg-white text-black rounded-lg max-w-3xl w-full overflow-hidden shadow-2xl"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", duration: 0.4 }}
        onClick={(e) => e.stopPropagation()} // supaya klik dalam modal tidak close
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedCase(null)}
          className="absolute top-4 right-4 z-10 bg-black/70 hover:bg-black text-white p-2 rounded-full transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image */}
        <img
          src={selectedCase.image}
          alt={selectedCase.title}
          className="w-full h-64 object-cover"
        />

        {/* Content */}
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-2">
            {selectedCase.title}
          </h2>
          <p className="text-[#AE8737] mb-4 font-semibold">
            {selectedCase.description}
          </p>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {selectedCase.detailedDescription}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </section>
  );
}
