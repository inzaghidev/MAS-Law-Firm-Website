import { Building2, Scale, FileText, Briefcase } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

export function LayananKami() {
  const services = [
    {
      icon: Building2,
      title: "Corporate Lawyer",
      description: "Layanan hukum komprehensif untuk korporasi, merger, akuisisi, dan transaksi bisnis dengan standar profesional tinggi."
    },
    {
      icon: Scale,
      title: "Pendaftaran Merek",
      description: "Panduan ahli dalam melindungi merek Anda melalui pendaftaran merek dagang dan kekayaan intelektual."
    },
    {
      icon: FileText,
      title: "Pendirian CV",
      description: "Penyusunan curriculum vitae profesional untuk para profesional hukum dan eksekutif korporat."
    },
    {
      icon: Briefcase,
      title: "Pendirian PT",
      description: "Bantuan lengkap dalam pendirian PT (Perseroan Terbatas) dengan kepatuhan hukum yang menyeluruh."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-[#AE8737] mb-6"></div>
          <h2 className="mb-4 text-[#191919]">Layanan Kami</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Layanan hukum komprehensif yang disesuaikan dengan kebutuhan bisnis Anda
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#AE8737]/50 transition-all duration-300 bg-white group">
                <CardContent className="p-7">
                  <div className="w-14 h-14 bg-[#AE8737]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#AE8737]/20 transition-colors">
                    <Icon className="w-7 h-7 text-[#AE8737]" />
                  </div>
                  <h3 className="mb-3 text-[#191919]">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}