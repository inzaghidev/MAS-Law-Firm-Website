import { Compass, Gavel } from 'lucide-react';
import { motion } from 'motion/react';

export function VisiMisi() {
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
    <section className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      {/* Visual Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1597920940566-a77511f9327d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbGF3JTIwbGlicmFyeSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3Njk2NjM4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
        }}
      />
      
      {/* Heavy Dark Overlay for Seamless Transition */}
      <div className="absolute inset-0 bg-[#0F0F0F]/90 z-0 bg-gradient-to-b from-[#0F0F0F] via-[#0F0F0F]/95 to-[#0F0F0F]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Visi Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/5 backdrop-blur-sm border border-[#AE8737]/30 p-8 md:p-12 rounded-xl relative group hover:border-[#AE8737]/50 transition-colors"
          >
            {/* Background Icon Decoration */}
            <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <Compass className="w-32 h-32 text-[#AE8737]" strokeWidth={0.5} />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col items-start mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <Compass className="w-6 h-6 text-[#AE8737]" strokeWidth={1.5} />
                  <h2 className="text-3xl font-serif text-[#AE8737] tracking-wide">Visi</h2>
                </div>
                <div className="w-16 h-[2px] bg-[#AE8737]"></div>
              </div>
              
              <ul className="space-y-6">
                {visiItems.map((item, index) => (
                  <li key={index} className="flex gap-4 group/item">
                    <span className="mt-2 min-w-[6px] w-[6px] h-[6px] rounded-full bg-[#AE8737]/70 group-hover/item:bg-[#AE8737] transition-colors"></span>
                    <p className="text-gray-300 font-light text-lg leading-relaxed group-hover/item:text-white transition-colors">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Misi Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/5 backdrop-blur-sm border border-[#AE8737]/30 p-8 md:p-12 rounded-xl relative group hover:border-[#AE8737]/50 transition-colors"
          >
            {/* Background Icon Decoration */}
            <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <Gavel className="w-32 h-32 text-[#AE8737]" strokeWidth={0.5} />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col items-start mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <Gavel className="w-6 h-6 text-[#AE8737]" strokeWidth={1.5} />
                  <h2 className="text-3xl font-serif text-[#AE8737] tracking-wide">Misi</h2>
                </div>
                <div className="w-16 h-[2px] bg-[#AE8737]"></div>
              </div>
              
              <ul className="space-y-6">
                {misiItems.map((item, index) => (
                  <li key={index} className="flex gap-4 group/item">
                    <span className="mt-2 min-w-[6px] w-[6px] h-[6px] rounded-full bg-[#AE8737]/70 group-hover/item:bg-[#AE8737] transition-colors"></span>
                    <p className="text-gray-300 font-light text-lg leading-relaxed group-hover/item:text-white transition-colors">
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
