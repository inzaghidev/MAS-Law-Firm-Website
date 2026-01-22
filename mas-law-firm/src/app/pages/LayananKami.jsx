import { Building2, Scale, FileText, Briefcase } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

export function LayananKami() {
  const services = [
    {
      icon: Building2,
      title: "Corporate Lawyer",
      description:
        "Solusi hukum komprehensif yang dirancang untuk menjaga stabilitas dan pertumbuhan bisnis Anda.",
    },
    {
      icon: Scale,
      title: "Pendaftaran Hak Atas Kekayaan Intelektual (HAKI)",
      description:
        "Perlindungan hukum permanen untuk ide, karya, dan identitas bisnis yang Anda bangun dengan kerja keras.",
    },
    {
      icon: FileText,
      title: "Company Branding",
      description:
        " Integrasi antara kekuatan hukum dan reputasi publik untuk memperkuat posisi pasar Anda.",
    },
    {
      icon: Briefcase,
      title: "Civil Litigation and Mediation",
      description:
        "Penyelesaian sengketa hukum yang strategis, baik di dalam maupun di luar pengadilan.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-[#AE8737] mb-6"></div>
          <h2 className="mb-4 text-[#191919]">Layanan Kami</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Layanan hukum komprehensif yang disesuaikan dengan kebutuhan bisnis
            Anda
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#AE8737]/50 transition-all duration-300 bg-white group"
              >
                <CardContent className="p-7">
                  <div className="w-14 h-14 bg-[#AE8737]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#AE8737]/20 transition-colors">
                    <Icon className="w-7 h-7 text-[#AE8737]" />
                  </div>
                  <h3 className="mb-3 text-[#191919]">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
