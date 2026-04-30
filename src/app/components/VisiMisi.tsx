import { Compass, Gavel } from 'lucide-react';
import { motion } from 'motion/react';

export default function VisiMisi() {
  const visiItems = [
    "Menjadi partner terpercaya bagi klien dalam perlindungan dan pengembangan hukum.",
    "Memberikan pelayanan hukum sepenuh hati yang profesional, transparan, dan berintegritas.",
    "Menjadi mitra strategis dalam mendukung kepastian, perlindungan, dan pengembangan hukum bagi individu, UMKM, dan perusahaan."
  ];

  const misiItems = [
    "Memberikan layanan hukum yang berfokus pada perlindungan hak dan kepentingan hukum klien secara bertanggung jawab.",
    "Mendampingi klien sebagai mitra strategis dalam setiap proses pengambilan keputusan hukum yang berkelanjutan.",
    "Mendorong pengembangan hukum melalui edukasi, inovasi layanan, dan peningkatan literasi hukum masyarakat."
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">

          {/* VISI */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#191919] border border-[#AE8737]/40 p-8 md:p-12 rounded-xl relative group hover:border-[#AE8737] transition-colors"
          >

            <div className="absolute top-6 right-8 opacity-10">
              <Compass className="w-32 h-32 text-[#AE8737]" strokeWidth={0.5} />
            </div>

            <div className="relative z-10">

              <div className="flex flex-col items-start mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <Compass className="w-6 h-6 text-[#AE8737]" />
                  <h2 className="text-3xl font-serif text-[#AE8737] tracking-wide">
                    Visi
                  </h2>
                </div>

                <div className="w-16 h-[2px] bg-[#AE8737]"></div>
              </div>

              <ul className="space-y-6">
                {visiItems.map((item, index) => (
                  <li key={index} className="flex gap-4">

                    <span className="mt-2 min-w-[6px] w-[6px] h-[6px] rounded-full bg-[#AE8737]"></span>

                    <p className="text-white font-light text-lg leading-relaxed">
                      {item}
                    </p>

                  </li>
                ))}
              </ul>

            </div>
          </motion.div>


          {/* MISI */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#191919] border border-[#AE8737]/40 p-8 md:p-12 rounded-xl relative group hover:border-[#AE8737] transition-colors"
          >

            <div className="absolute top-6 right-8 opacity-10">
              <Gavel className="w-32 h-32 text-[#AE8737]" strokeWidth={0.5} />
            </div>

            <div className="relative z-10">

              <div className="flex flex-col items-start mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <Gavel className="w-6 h-6 text-[#AE8737]" />
                  <h2 className="text-3xl font-serif text-[#AE8737] tracking-wide">
                    Misi
                  </h2>
                </div>

                <div className="w-16 h-[2px] bg-[#AE8737]"></div>
              </div>

              <ul className="space-y-6">
                {misiItems.map((item, index) => (
                  <li key={index} className="flex gap-4">

                    <span className="mt-2 min-w-[6px] w-[6px] h-[6px] rounded-full bg-[#AE8737]"></span>

                    <p className="text-white font-light text-lg leading-relaxed">
                      {item}
                    </p>

                  </li>
                ))}
              </ul>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
