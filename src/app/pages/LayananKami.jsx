import { useState } from 'react';
import { Building2, Scale, FileText, Briefcase, X } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

export function LayananKami() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: Building2,
      title: "Corporate Lawyer",
      description:
        "Pendampingan hukum untuk operasional bisnis, kontrak, kepatuhan regulasi, hingga mitigasi risiko hukum perusahaan.",
      detail:
        "Kami membantu perusahaan dalam penyusunan kontrak, legal audit, kepatuhan regulasi, merger & akuisisi, serta perlindungan hukum jangka panjang untuk memastikan bisnis berjalan aman dan berkelanjutan."
    },
    {
      icon: Scale,
      title: "Pendaftaran HAKI",
      description:
        "Perlindungan hukum untuk merek, logo, dan karya intelektual Anda.",
      detail:
        "Layanan mencakup pengecekan merek, pendaftaran ke DJKI, monitoring, hingga penanganan sengketa hak kekayaan intelektual agar brand Anda aman secara hukum."
    },
    {
      icon: FileText,
      title: "Company Branding Legal",
      description:
        "Perkuat brand Anda dengan fondasi hukum yang tepat.",
      detail:
        "Kami membantu legalitas brand, perlindungan identitas usaha, penyusunan legal document brand, serta strategi perlindungan reputasi bisnis di pasar."
    },
    {
      icon: Briefcase,
      title: "Litigasi & Mediasi",
      description:
        "Penyelesaian sengketa secara profesional dan strategis.",
      detail:
        "Penanganan perkara perdata, negosiasi, mediasi, hingga litigasi di pengadilan dengan pendekatan strategis untuk hasil terbaik bagi klien."
    }
  ];

  return (
    <>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block w-12 h-1 bg-[#AE8737] mb-6"></div>
            <h2 className="mb-4 text-[#191919]">Layanan Kami</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Layanan hukum profesional untuk melindungi dan mengembangkan bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  onClick={() => setSelectedService(service)}
                  className="cursor-pointer border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#AE8737]/50 transition-all duration-300 bg-white group"
                >
                  <CardContent className="p-7">
                    <div className="w-14 h-14 bg-[#AE8737]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#AE8737]/20 transition-colors">
                      <Icon className="w-7 h-7 text-[#AE8737]" />
                    </div>
                    <h3 className="mb-3 text-[#191919] font-semibold">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Premium Modal ===== */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          
          {/* Modal Box */}
          <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl animate-[fadeIn_0.3s_ease]">

            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#AE8737]/10 rounded-lg flex items-center justify-center">
                  <selectedService.icon className="w-6 h-6 text-[#AE8737]" />
                </div>
                <h3 className="text-xl font-bold text-[#191919]">
                  {selectedService.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedService(null)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-slate-600 leading-relaxed mb-6">
                {selectedService.detail}
              </p>

              {/* CTA */}
              <div className="flex gap-3">
                <a
                  href="https://wa.me/628123456789"
                  target="_blank"
                  className="flex-1 text-center bg-[#AE8737] hover:bg-[#8f6e2d] text-[#191919] hover:text-white py-3 rounded-lg font-medium transition"
                >
                  Konsultasi Sekarang
                </a>

                <button
                  onClick={() => setSelectedService(null)}
                  className="flex-1 border border-slate-300 py-3 rounded-lg text-slate-600 hover:bg-slate-50 transition"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
