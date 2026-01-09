import { Briefcase } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

export function Portofolio() {
  const portfolio = [
    {
      company: "TechVision Corporation",
      service: "Pendirian Perusahaan & Restrukturisasi Korporat",
      year: "2025"
    },
    {
      company: "GlobalTrade Enterprises",
      service: "Pendaftaran Merek & Perlindungan Kekayaan Intelektual",
      year: "2024"
    },
    {
      company: "Innovation Labs Inc.",
      service: "Layanan Hukum Merger & Akuisisi",
      year: "2024"
    },
    {
      company: "Pacific Holdings Ltd.",
      service: "Tata Kelola Perusahaan & Kepatuhan",
      year: "2023"
    },
    {
      company: "NextGen Solutions",
      service: "Tinjauan Kontrak & Hukum Bisnis",
      year: "2023"
    },
    {
      company: "Horizon Investments",
      service: "Hukum Korporat & Uji Tuntas",
      year: "2023"
    }
  ];

  return (
    <section className="py-24 bg-[#191919] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#191919] via-[#252525] to-[#191919]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-[#AE8737] mb-6"></div>
          <h2 className="mb-4">Rekam Jejak & Portofolio</h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Dipercaya oleh perusahaan-perusahaan terkemuka di berbagai industri
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {portfolio.map((item, index) => (
            <Card key={index} className="bg-[#252525]/50 backdrop-blur-sm border border-[#3a3a3a]/50 hover:bg-[#2a2a2a] hover:border-[#AE8737]/30 transition-all duration-300">
              <CardContent className="p-7">
                <div className="flex items-start justify-between mb-4">
                  <Briefcase className="w-9 h-9 text-[#AE8737]" />
                  <span className="px-3 py-1.5 bg-[#AE8737]/10 border border-[#AE8737]/30 text-[#AE8737] rounded-full text-sm font-medium">
                    {item.year}
                  </span>
                </div>
                <h3 className="mb-3 text-white">{item.company}</h3>
                <p className="text-slate-400 leading-relaxed">{item.service}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}