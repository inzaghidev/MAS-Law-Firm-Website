import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Plus, X, Mail, Phone, Linkedin } from "lucide-react";
import pakAmarImage from "/amar.jpeg";
import anggiImage from "/anggi.jpeg";

export function TimPengacara() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedLawyer, setSelectedLawyer] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedLawyer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedLawyer]);

  const lawyers = [
    {
      id: "lawyer1",
      name: "Adv. Muhamad Amar, S.H., S.M., M.M., CTT",
      title: "Managing Partner of MAS Law Firm",
      specialty: "Spesialis Hukum Korporasi",
      image: pakAmarImage,
      bio: "Muhamad Amar adalah pendiri M.A.S Law Firm dengan pengalaman profesional di bidang hukum korporasi. Beliau telah menangani berbagai transaksi M&A bernilai tinggi dan memberikan konsultasi strategis kepada perusahaan multinasional.",
      email: "amar@lawyermas.com",
      phone: "+62 812-3456-7890",
      linkedin: "https://www.linkedin.com/in/muhamadamar",
      experience: [
        {
          title: "Hukum Korporasi & M&A",
          points: [
            "Ahli dalam mengelola struktur hukum pada transaksi merger dan akuisisi yang kompleks, memastikan keamanan aset dan kepatuhan regulasi bagi mitra bisnis.",
            "Memberikan konsultasi strategis dalam restrukturisasi perusahaan dan joint venture",
            "Ahli dalam due diligence dan negosiasi kontrak kompleks",
          ],
        },
        {
          title: "Tata Kelola Perusahaan",
          points: [
            "Membantu perusahaan publik dan swasta dalam membangun struktur tata kelola yang efektif",
            "Implementasi best practices internasional dan regulasi OJK",
            "Penyusunan kebijakan internal dan compliance framework",
          ],
        },
        {
          title: "Kepatuhan Regulasi",
          points: [
            "Konsultan hukum untuk berbagai perusahaan dalam memastikan kepatuhan terhadap peraturan",
            "Keahlian dalam UU Perseroan Terbatas, UU Pasar Modal, dan regulasi sektoral",
            "Penanganan audit regulasi dan investigasi pemerintah",
          ],
        },
      ],
      education: [
        {
          degree: "Magister Manajemen (M.M.)",
          year: "2023",
          school: "UPN Veteran Jakarta",
          honor: "Cum Laude",
          details: [
            "Fokus Strategis: Fokus pada Manajemen Operasional Luar Biasa dan Optimalisasi Strategi Bisnis untuk Firma Hukum Modern.",
            "Efisiensi Sistem: Spesialisasi dalam restrukturisasi alur kerja internal guna meningkatkan efisiensi layanan bagi klien korporasi.",
            "Kepemimpinan: Mengembangkan model kepemimpinan berbasis data untuk mengelola tim profesional multidisiplin.",
          ],
        },
        {
          degree: "Sarjana Hukum (S.H.)",
          year: "2024",
          school: "Universitas Duta Bangsa Surakarta",
          honor: "Summa Cum Laude",
          details: [
            "Peneliti aktif dalam isu hukum merger dan akuisisi guna memitigasi risiko bagi klien korporasi.",
            "Menjembatani kepatuhan hukum dengan tujuan komersial perusahaan untuk memastikan kelancaran setiap transaksi korporasi.",
          ],
        },
        {
          degree: "Sarjana Manajemen (S.M.)",
          year: "2021",
          school: "UPN Veteran Jakarta",
          honor: "Summa Cum Laude",
          details: [
            "Ahli dalam manajemen organisasi dan optimasi sumber daya manusia di lingkungan profesional.",
            "Mengoptimalkan sistem manajemen internal firma guna memberikan layanan hukum yang responsif dan efisien bagi klien.",
          ],
        },
      ],
    },
    {
      id: "lawyer2",
      name: "Adv. A.K.H. Hasibuan, S.H., S.Si., M.Si., CPM, CHT",
      title: "Senior Partner",
      specialty: "Spesialis Konsultasi Legal",
      image: anggiImage,
      bio: "Anggi Khairina adalah Senior Partner di M.A.S Law Firm dengan keahlian khusus di bidang kekayaan intelektual dan hukum merek dagang. Dengan pengalaman lebih dari 12 tahun, beliau telah membantu ratusan klien dalam melindungi aset intelektual mereka.",
      email: "a.khairina@maslawfirm.com",
      phone: "+62 812-8198-8649",
      linkedin: "https://www.linkedin.com/in/anggi-khairina-hasibuan",
      experience: [
        {
          title: "Kekayaan Intelektual & Merek Dagang",
          points: [
            "Spesialis dalam pendaftaran, perlindungan, dan litigasi merek dagang",
            "Telah menangani lebih dari 500 kasus pendaftaran merek",
            "Pengalaman dalam 50+ sengketa merek dagang di Indonesia dan regional",
          ],
        },
        {
          title: "Dokumentasi Korporat",
          points: [
            "Ahli dalam menyusun dan meninjau dokumen hukum korporat",
            "Perjanjian bisnis, kontrak komersial, dan perjanjian lisensi",
            "Review dan drafting berbagai dokumen transaksi korporat",
          ],
        },
        {
          title: "Konsultasi Strategis IP",
          points: [
            "Memberikan konsultasi strategis kepada startup dan perusahaan teknologi",
            "Membangun portofolio IP yang kuat dan komprehensif",
            "Strategi eksploitasi dan monetisasi aset intelektual",
          ],
        },
      ],
      education: [
        {
          degree: "Sarjana Kimia (S.Si)",
          year: "2009 - 2015",
          school: "Universitas Negeri Surabaya", // Added missing comma
          details: [
            "Fokus pada analisis kimia dan biokimia terapan",
            "Menguasai penggunaan alat instrumentasi dan metode analisis laboratorium",
          ],
        },
        {
          degree: "Magister Ilmu dan Teknologi Forensik (M.Si)",
          year: "2015 - 2018",
          school: "Universitas Airlangga",
          details: [
            "Fokus pada penerapan Sains dalam analisis Forensik",
            "Spesialisasi analisis kimia untuk kebutuhan forensik",
            "Riset akhir pada tektik pemisahan KLT",
          ],
        },
        {
          degree: "Sarjana Ilmu Hukum (S.H)",
          year: "2021 - 2024",
          scholl: "Universitas Duta Bangsa Surakarta",
          details: [
            "Pengelolaan aspek hukum pidana, perdata, dan TUN",
            "Riset Hukum Pidana dengan fokus bidang kesehatan",
          ],
        },
        {
          degree: "Sarjana Ilmu Psikilogi (S.Psi)",
          year: "2021-sekarang",
          school: "Universitas Teknologi Nusantara",
          details: [
            "Penerapan dan Pengelolaan aspek psikologi",
            "Mahasiswa Aktif semester 7",
          ],
        },
      ],
    },
  ];

  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-[#AE8737] mb-6"></div>
          <h2 className="mb-4 text-[#191919]">Tim Pengacara Kami</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Profesional hukum berpengalaman yang berdedikasi melindungi
            kepentingan Anda
          </p>
        </div>

        {/* LAWYER LIST (Grid Gallery) */}
        <div className="flex flex-col items-center gap-24 max-w-3xl mx-auto">
          {lawyers.map((lawyer, index) => (
            <motion.div
              key={lawyer.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setSelectedLawyer(lawyer)}
              className="cursor-pointer text-center"
            >
              <Card className="bg-transparent border-none shadow-none">
                <div className="relative flex justify-center mb-6">
                  <div className="w-[380px] h-[380px] rounded-full overflow-hidden border-[5px] border-[#AE8737] shadow-2xl">
                    <img
                      src={lawyer.image}
                      alt={lawyer.name}
                      className="w-full h-full object-cover object-[center_15%] scale-110"
                    />
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#AE8737] flex items-center justify-center shadow-lg">
                      <Plus className="w-8 h-8 text-[#191919]" />
                    </div>
                  </motion.div>
                </div>

                <h3 className="text-2xl font-bold text-[#191919] mb-2">
                  {lawyer.name}
                </h3>
                <p className="text-[#AE8737] font-semibold mb-1">
                  {lawyer.title}
                </p>
                <p className="text-gray-400 text-sm mb-4">{lawyer.specialty}</p>

                <div className="flex justify-center mt-4">
                  <a
                    href={lawyer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 hover:border-[#AE8737] hover:bg-[#AE8737] transition"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin className="w-5 h-5 text-[#191919]" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lawyer Detail MODAL */}
      <AnimatePresence>
        {selectedLawyer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[#191919]/90 backdrop-blur-sm"
              onClick={() => setSelectedLawyer(null)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-2xl flex flex-col md:flex-row overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedLawyer(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-[#191919]/10 hover:bg-[#191919]/20 rounded-full transition-colors text-[#191919]"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col md:flex-row w-full">
                {/* Left Column: Image (Sticky on Desktop) */}
                <div className="w-full md:w-5/12 lg:w-4/12 bg-gray-100 flex items-center justify-center p-8 md:sticky md:top-0 h-auto md:h-full min-h-[400px]">
                  <img
                    src={selectedLawyer.image}
                    alt={selectedLawyer.name}
                    className="w-full h-full object-contain max-h-[600px] drop-shadow-xl"
                  />
                </div>

                {/* Right Column: Content */}
                <div className="w-full md:w-7/12 lg:w-8/12 p-8 md:p-12 overflow-y-auto">
                  {/* Header Info */}
                  <div className="mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#191919] mb-3">
                      {selectedLawyer.name}
                    </h2>
                    <p className="text-2xl text-[#AE8737] font-bold mb-6">
                      {selectedLawyer.title}
                    </p>
                    <p className="text-[#191919] text-lg leading-relaxed border-l-4 border-[#AE8737] pl-6 mb-8">
                      {selectedLawyer.bio}
                    </p>

                    {/* Contact Info */}
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={`mailto:${selectedLawyer.email}`}
                        className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-full border border-gray-200 hover:border-[#AE8737] transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#AE8737] flex items-center justify-center flex-shrink-0 group-hover:bg-[#191919] transition-colors">
                          <Mail className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-[#191919] font-medium">
                          {selectedLawyer.email}
                        </span>
                      </a>
                      <a
                        href={`tel:${selectedLawyer.phone}`}
                        className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-full border border-gray-200 hover:border-[#AE8737] transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#AE8737] flex items-center justify-center flex-shrink-0 group-hover:bg-[#191919] transition-colors">
                          <Phone className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-[#191919] font-medium">
                          {selectedLawyer.phone}
                        </span>
                      </a>
                      <a
                        href={selectedLawyer.linkedin}
                        className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-full border border-gray-200 hover:border-[#AE8737] transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#AE8737] flex items-center justify-center flex-shrink-0 group-hover:bg-[#191919] transition-colors">
                          <Linkedin className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-[#191919] font-medium">
                          LinkedIn
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="h-px w-full bg-gray-200 mb-10"></div>

                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Experience Section */}
                    <div>
                      <h3 className="text-xl font-bold text-[#191919] mb-4 flex items-center">
                        EXPERIENCE & EXPERTISE
                        <span className="ml-4 h-px flex-1 bg-[#AE8737]"></span>
                      </h3>
                      <div className="space-y-8">
                        {selectedLawyer.experience.map((exp, idx) => (
                          <div key={idx}>
                            <h4 className="font-bold text-[#AE8737] text-lg mb-2">
                              {exp.title}
                            </h4>
                            <ul className="space-y-2">
                              {exp.points.map((point, pIdx) => (
                                <li
                                  key={pIdx}
                                  className="flex items-start gap-3 text-gray-700 text-sm"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#191919] mt-2 flex-shrink-0"></span>
                                  <span className="leading-relaxed">
                                    {point}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Education Section */}
                    <div>
                      <h3 className="text-xl font-bold text-[#191919] mb-4 flex items-center">
                        EDUCATION
                        <span className="ml-4 h-px flex-1 bg-[#AE8737]"></span>
                      </h3>
                      <div className="space-y-8">
                        {selectedLawyer.education.map((edu, idx) => (
                          <div
                            key={idx}
                            className="bg-gray-50 p-5 rounded-lg border-l-4 border-[#AE8737]"
                          >
                            <div className="flex justify-between items-start mb-1">
                              <h4 className="font-bold text-[#191919] text-lg leading-tight">
                                {edu.degree}
                              </h4>
                              <span className="text-[#AE8737] font-bold text-sm bg-[#AE8737]/10 px-2 py-1 rounded">
                                {edu.year}
                              </span>
                            </div>
                            <p className="text-gray-700 font-medium">
                              {edu.school}
                            </p>
                            <p className="text-sm text-[#AE8737] mb-3 italic">
                              {edu.honor}
                            </p>
                            <ul className="space-y-1">
                              {edu.details.map((detail, dIdx) => (
                                <li
                                  key={dIdx}
                                  className="text-gray-600 text-xs flex items-start gap-2"
                                >
                                  <span>•</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
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
