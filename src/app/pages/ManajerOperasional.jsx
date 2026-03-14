import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from '../components/ui/card';
import { Plus, X } from 'lucide-react';
import managerImage from "/dzul.jpeg";

export function ManajerOperasional() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedManager, setSelectedManager] = useState(null);

  const manager = {
    name: "Muhammad Dzulqarnain",
    title: "Manajer Operasional",
    specialty: "Manajemen Operasional & Administrasi Kantor",
    image: managerImage,
    bio: "Muhammad Dzulqarnain berperan sebagai Manajer Operasional yang bertanggung jawab atas pengelolaan operasional kantor hukum secara menyeluruh. Memiliki fokus pada pengaturan administrasi, koordinasi internal, serta penerapan sistem kerja dan SOP untuk memastikan seluruh layanan hukum berjalan efektif, tertib, dan sesuai dengan standar profesional.",
    responsibilities: [
      "Mengelola dan mengawasi seluruh operasional kantor hukum",
      "Mengkoordinasikan administrasi dan manajemen internal",
      "Menyusun, menerapkan, dan mengevaluasi SOP operasional",
      "Memastikan efisiensi kerja dan kelancaran layanan hukum",
      "Mendukung kebutuhan operasional advokat dan staf"
    ],
    qualifications: [
      "Sarjana Manajemen, Universitas Pembangunan Nasional Veteran Jakarta dengan pengalaman memimpin dan mengelola berbagai unit usaha.",
      "Berpengalaman sebagai Manajer Operasional di perusahaan dan kantor hukum.",
      "Terbiasa mengelola operasional harian, administrasi, dan koordinasi tim.",
      "Memiliki pengalaman dalam pengelolaan bisnis, layanan klien, dan pengawasan operasional.",
      "Mampu bekerja secara sistematis, disiplin, dan bertanggung jawab.",
      "Memiliki kemampuan komunikasi, leadership, dan problem solving yang baik"
      
    ]
  };

  return (
    <section className="py-24 bg-[#191919] min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-[#AE8737] mb-6"></div>
          <h2 className="mb-4 text-white">Manajer Operasional</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Memastikan keunggulan operasional dan efisiensi layanan M.A.S Law Firm
          </p>
        </div>

        {/* Single Centered Card */}
        <div className="flex justify-center">
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onHoverStart={() => setHoveredIndex(0)}
            onHoverEnd={() => setHoveredIndex(null)}
            onClick={() => setSelectedManager(manager)}
            className="w-full max-w-md cursor-pointer"
          >
            <Card className="border-2 border-[#AE8737] shadow-lg overflow-hidden bg-[#1a1a1a] group h-full">
              {/* Image Container with Overlay */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-900 flex items-center justify-center p-0">
                <img 
                  src={manager.image} 
                  alt={manager.name}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === 0 ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-[#191919]/90 flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#AE8737] flex items-center justify-center mb-4">
                    <Plus className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <p className="text-white text-lg font-semibold">Lihat Profil</p>
                </motion.div>
              </div>

              {/* Card Info */}
              <div className="p-6 text-center bg-[#1a1a1a] border-t-2 border-[#AE8737]">
                <h3 className="text-2xl font-bold text-white mb-2">{manager.name}</h3>
                <p className="text-[#AE8737] font-semibold text-base mb-1">{manager.title}</p>
                <p className="text-gray-400 text-sm mb-4">{manager.specialty}</p>
                <p className="text-gray-500 text-sm line-clamp-3">{manager.bio}</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Modal - Landscape & Premium */}
      <AnimatePresence>
        {selectedManager && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-[#191919]/90 backdrop-blur-sm"
              onClick={() => setSelectedManager(null)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl bg-[#1a1a1a] border border-[#AE8737] rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedManager(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-[#191919] hover:bg-[#AE8737] border border-[#AE8737] rounded-full transition-colors text-white group"
              >
                <X className="w-5 h-5 group-hover:text-[#191919]" />
              </button>

              <div className="flex flex-col md:flex-row w-full p-8 md:p-12 items-center">
                {/* Left: Circular Image */}
                <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
                  <div className="relative w-48 h-48 md:w-56 md:h-56">
                    {/* Double Gold Ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#AE8737]"></div>
                    <div className="absolute -inset-2 rounded-full border border-[#AE8737]/50"></div>
                    
                    <img 
                      src={selectedManager.image} 
                      alt={selectedManager.name}
                      className="w-full h-full object-cover object-top rounded-full p-1"
                    />
                  </div>
                </div>

                {/* Right: Content */}
                <div className="w-full md:w-2/3 md:pl-12 text-white">
                  <div className="mb-8 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedManager.name}</h2>
                    <p className="text-xl text-[#AE8737] font-serif tracking-wide">{selectedManager.title}</p>
                    <div className="h-0.5 w-24 bg-[#AE8737] mt-4 mx-auto md:mx-0"></div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Responsibilities */}
                    <div>
                      <h3 className="text-[#AE8737] font-bold text-sm tracking-wider mb-4 border-b border-[#AE8737]/30 pb-2">
                        TANGGUNG JAWAB UTAMA
                      </h3>
                      <ul className="space-y-2">
                        {selectedManager.responsibilities.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="text-[#AE8737] mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Qualifications */}
                    <div>
                      <h3 className="text-[#AE8737] font-bold text-sm tracking-wider mb-4 border-b border-[#AE8737]/30 pb-2">
                        KUALIFIKASI
                      </h3>
                      <ul className="space-y-2">
                        {selectedManager.qualifications.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="text-[#AE8737] mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
