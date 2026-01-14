import { useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "../components/ui/card";
import pakAmarImage from "../../foto-amar-syeban.png";

export function TimPengacara() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const lawyers = [
    {
      name: "Muhamad Amar",
      specialty: "Spesialis Hukum Korporasi",
      background:
        "Pengalaman 15+ tahun di bidang hukum korporasi, transaksi M&A, dan tata kelola perusahaan. Lulusan Harvard Law School dengan predikat cum laude.",
      image: pakAmarImage,
    },
    {
      name: "Anggi Khairina",
      specialty: "Spesialis Merek Dagang & Dokumen Hukum",
      background:
        "Pengalaman 12+ tahun dengan spesialisasi di bidang kekayaan intelektual, hukum merek dagang, dan dokumentasi korporat. Anggota International Trademark Association.",
      image:
        "https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBsYXd5ZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY3NTA2NzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-[#AE8737] mb-6"></div>
          <h2 className="mb-4 text-[#191919]">Tim Pengacara Kami</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Profesional hukum berpengalaman yang berdedikasi melindungi
            kepentingan Anda
          </p>
        </div>

        {/* Card Stack Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[700px] md:h-[650px] flex items-center justify-center">
            {lawyers.map((lawyer, index) => {
              const isTop = index === 0;
              const isHovered = hoveredIndex === index;
              const otherCardHovered =
                hoveredIndex !== null && hoveredIndex !== index;

              return (
                <motion.div
                  key={index}
                  className="absolute w-full max-w-md"
                  initial={{
                    x: isTop ? -40 : 40,
                    y: isTop ? -30 : 30,
                    rotate: isTop ? -3 : 3,
                    zIndex: isTop ? 2 : 1,
                  }}
                  animate={{
                    x: isHovered
                      ? isTop
                        ? -80
                        : 80
                      : otherCardHovered
                      ? isTop
                        ? -20
                        : 20
                      : isTop
                      ? -40
                      : 40,
                    y: isHovered
                      ? isTop
                        ? -60
                        : 60
                      : otherCardHovered
                      ? isTop
                        ? -15
                        : 15
                      : isTop
                      ? -30
                      : 30,
                    rotate: isHovered
                      ? isTop
                        ? -8
                        : 8
                      : otherCardHovered
                      ? isTop
                        ? -1
                        : 1
                      : isTop
                      ? -3
                      : 3,
                    scale: isHovered ? 1.05 : otherCardHovered ? 0.95 : 1,
                    zIndex: isHovered ? 3 : isTop ? 2 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <Card className="border-0 shadow-2xl overflow-hidden cursor-pointer bg-white">
                    <div
                      className={`${
                        index === 0 ? "aspect-[4/3]" : "aspect-[4/3]"
                      } overflow-hidden bg-slate-200`}
                    >
                      <motion.img
                        src={lawyer.image}
                        alt={lawyer.name}
                        className="w-full h-full object-cover"
                        animate={{
                          scale: isHovered ? 1.1 : 1,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                      />
                    </div>
                    <CardContent className="p-8 bg-white">
                      <h3 className="mb-2 text-[#191919]">{lawyer.name}</h3>
                      <div className="h-0.5 w-12 bg-[#AE8737] mb-3"></div>
                      <p className="mb-4 text-[#AE8737] font-medium">
                        {lawyer.specialty}
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        {lawyer.background}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile View - Stack vertically on small screens */}
        <div className="md:hidden mt-12 space-y-6 max-w-md mx-auto">
          {lawyers.map((lawyer, index) => (
            <Card key={index} className="border-0 shadow-lg overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                <img
                  src={lawyer.image}
                  alt={lawyer.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 bg-white">
                <h3 className="mb-2 text-[#191919]">{lawyer.name}</h3>
                <div className="h-0.5 w-12 bg-[#AE8737] mb-3"></div>
                <p className="mb-4 text-[#AE8737] font-medium">
                  {lawyer.specialty}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {lawyer.background}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
