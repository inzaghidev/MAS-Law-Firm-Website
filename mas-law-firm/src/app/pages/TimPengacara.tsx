import { Card, CardContent } from "../components/ui/card";
import pakAmarImage from "../../assets/foto-amar-syeban.png";

export function TimPengacara() {
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
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {lawyers.map((lawyer, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg overflow-hidden group"
            >
              <div
                className={`${
                  index === 0 ? "aspect-[3/4]" : "aspect-[4/3]"
                } overflow-hidden bg-slate-200`}
              >
                <img
                  src={lawyer.image}
                  alt={lawyer.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8 bg-white">
                <h3 className="mb-2 text-[#191919]">{lawyer.name}</h3>
                <p className="mb-4 text-[#AE8737]">{lawyer.specialty}</p>
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
