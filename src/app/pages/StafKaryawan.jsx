import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from '../components/ui/card';
import { Plus, X } from 'lucide-react';
import yeniImage from '/yeni.webp';
import triImage from '/tri.jpeg';
import citraImage from '/citra.png';
import inzaghiImage from '/inzaghi.png';
import elokImage from '/elok.JPG';
import ditoImage from '/dito.jpeg';
import zahraImage from '/zahra.png';
import halimahImage from '/halimah.png';
import adityaImage from '/adit.png';

export function StafKaryawan() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const employees = [
    {
      id: 1,
      name: "Tri Utami, S.H.",
      title: "Legal Administration",
      image: triImage,
      expertise: [
        "Manajemen Dokumen Hukum",
        "Korespondensi Legal",
        "Penjadwalan Agenda Sidang",
        "Administrasi Kontrak & Izin"
      ]
    },
    {
      id: 2,
      name: "Dito Satrio, S.Ak.",
      title: "Administration Support Business Unit",
      image: ditoImage,
      expertise: [
        "Tata Kelola Administrasi Bisnis",
        "Alur Kerja Operasional Unit",
        "Manajemen Database Klien",
        "Koordinasi Lintas Departemen"
      ]
    },
    {
      id: 3,
      name: "Aditya Sulistyo Budhi, S.H.",
      title: "Business Development Lead",
      specialty: "Business Strategy and Coordination",
      image: adityaImage,
      expertise: [
        "Menyusun strategi pengembangan bisnis tim",
        "mengkoordinasikan tugas anggota Business Development",
        "Menghubungkan Tim dengan divisi internal lain",
        "Memantau progress dan capaian kerja tim",
        "Menyusun laporan perkembangan tim"
      ]
    },
    {
      id: 4,
      name: "Yeni Afyah, S.Pd.",
      title: "Business Development Staff",
      specialty: "Market Research & Apportunity Analysis",
      image: yeniImage,
      expertise: [
        "Melakukan riset dan kebutuhan pasar",
        "Menganalisis peluang bisnis potential",
        "Mengumpulkan dan mengelola data pasar",
        "Mendukung insight dari hasil riset",
        "Menyajikan hasil analisis secara ringkas"
      ]
    },
    {
      id: 5,
      name: "Citra Mutiara, S.T.",
      title: "Business Development Staff",
      specialty: "Client & Partnership Relations",
      image: citraImage,
      expertise: [
        "Menjalin komunikasi dengan mitra eksternal",
        "mengelola data dan kontrak mitra",
        "Mengoordinasikan kebutuhan mitra",
        "Menyampaikan informasi ke tim internal",
        "Menjaga hubungan kerja sama berkelanjutan"
      ]
    },
    {
      id: 6,
      name: "Halimah Tusadiah, S.M",
      title: "business Development Staff",
      specialty: "Business Proposal & Pitching",
      image: halimahImage,
      expertise: [
        "Menyusun Proposal Kerja Sama",
        "Mengembangkan konsep penawaran bisnis",
        "Menyesuaikan proposal dengan mitra",
        "Membuat materi presentasi dan pitching",
        "Merevisi prosposal berdasarkan masukan"
      ]
    },
    {
      id: 7,
      name: "Zahra Wina Muntaza, S.Sos",
      title: "Social Media Specialist",
      specialty: "TikTok Content Creator",
      image: zahraImage,
      expertise: [
        "Perencanaan dan produksi konten media sosial di TikTok",
        "Pembuatan konten edukasi hukum dan thought leadership",
        "Strategi konten TikTok dan pengembangan audiens",
        "Pengelolaan interaksi dan engagement yang bermakna",
        "Kolaborasi dengan lawyer untuk konten edukasi hukum",
        "Analisis performa konten dan media sosial",
        "Penyusunan rekomendasi strategi konten",
        "Riset trend dan pembelajaran berkelanjutan media sosial"
      ]
    },
    {
      id: 8,
      name: "Elok Faiqotul Hikmah, S.Sos.",
      title: "Social Media Specialist",
      specialty: "Instagram Content Creator",
      image: elokImage,
      expertise: [
        "Perencanaan dan produksi konten media sosial di Instagram",
        "Pembuatan konten edukasi hukum",
        "Strategi konten Instagram dan pengembangan audiens",
        "Pengelolaan interaksi dan engagement yang bermakna",
        "Kolaborasi dengan lawyer untuk konten edukasi hukum",
        "Analisis performa konten dan media sosial",
        "Penyusunan rekomendasi strategi konten",
        "Riset trend dan pembelajaran berkelanjutan media sosial"
      ]
    },
    {
      id: 9,
      name: "Inzaghi Posuma Al Kahfi, S.Kom.",
      title: "Web Developer (Full Stack)",
      image: inzaghiImage,
      expertise: [
        "Frontend Development",
        "Backend Development",
        "API Integration",
        "Database Management",
        "Deployment & Maintenance"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-[#AE8737] mb-6"></div>
          <h2 className="mb-4 text-[#191919]">Staf & Karyawan</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Tim profesional yang berdedikasi mendukung operasional M.A.S Law Firm
          </p>
        </div>

        {/* 3x3 Grid Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {employees.map((employee, index) => (
            <motion.div
              key={employee.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setSelectedEmployee(employee)}
              className="cursor-pointer"
            >
              <Card className="border-2 border-[#AE8737] shadow-lg overflow-hidden bg-[#1a1a1a] group h-full">
                {/* Image Container with Overlay */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-900 flex items-center justify-center p-0">
                  <img 
                    src={employee.image} 
                    alt={employee.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#AE8737] flex items-center justify-center mb-4">
                      <Plus className="w-8 h-8 text-[#191919]" strokeWidth={2.5} />
                    </div>
                    <p className="text-[#191919] text-lg font-semibold">Lihat Profil</p>
                  </motion.div>
                </div>

                {/* Card Info */}
                <div className="p-6 text-center bg-[#1a1a1a] border-t-2 border-[#AE8737]">
                  <h3 className="text-xl font-bold text-[#191919] text-white mb-1">{employee.name}</h3>
                  <p className="text-[#AE8737] font-semibold text-sm mb-1">{employee.title}</p>
                  <p className="text-gray-400 text-xs">{employee.specialty}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal - Portrait & Modern */}
      <AnimatePresence>
        {selectedEmployee && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-white/90 backdrop-blur-sm"
              onClick={() => setSelectedEmployee(null)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedEmployee(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-black/40 hover:bg-black/60 rounded-full transition-colors text-[#191919] shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Top: Full Width Image */}
              <div className="h-64 overflow-hidden relative shrink-0">
                <img 
                  src={selectedEmployee.image} 
                  alt={selectedEmployee.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Bottom: Content */}
              <div className="p-6 -mt-6 bg-white rounded-t-3xl relative z-10 flex flex-col items-center text-center">
                <h2 className="text-2xl font-bold text-[#191919] mb-1">{selectedEmployee.name}</h2>
                <p className="text-[#AE8737] font-semibold mb-6">{selectedEmployee.title}</p>

                {/* Role & Expertise Card */}
                <div className="w-full bg-gray-100 rounded-xl p-6">
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                    PERAN & KEAHLIAN
                  </h3>
                  <ul className="space-y-3">
                    {selectedEmployee.expertise.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-700 font-medium border-b border-gray-200 last:border-0 pb-2 last:pb-0">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
