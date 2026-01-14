import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

export function Berita() {
  const news = [
    {
      title: "Regulasi Hukum Korporasi Terbaru: Yang Perlu Diketahui Bisnis Anda",
      date: "2 Januari 2026",
      summary: "Pembaruan terkini dalam regulasi hukum korporasi yang dapat mempengaruhi operasional bisnis Anda. Pelajari persyaratan kepatuhan dan cara mempersiapkannya.",
      image: "https://images.unsplash.com/photo-1752697589128-f8e110a86af3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBib29rcyUyMGxlZ2FsfGVufDF8fHx8MTc2NzYwOTI1MXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Perlindungan Merek di Era Digital: Panduan Esensial",
      date: "28 Desember 2025",
      summary: "Memahami pentingnya melindungi merek Anda di pasar yang semakin digital. Wawasan ahli tentang strategi merek dagang modern.",
      image: "https://images.unsplash.com/photo-1763729805496-b5dbf7f00c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnRyYWN0JTIwbGVnYWx8ZW58MXx8fHwxNzY3NjA5MjUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Pembaruan Hukum Pajak 2026 untuk Perseroan Terbatas",
      date: "20 Desember 2025",
      summary: "Tetap terinformasi tentang perubahan hukum pajak terbaru yang mempengaruhi PT. Panduan komprehensif kami membantu Anda menavigasi persyaratan baru.",
      image: "https://images.unsplash.com/photo-1756633231294-f72b004e8c5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VydGhvdXNlJTIwanVzdGljZXxlbnwxfHx8fDE3Njc1MDgwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-[#AE8737] mb-6"></div>
          <h2 className="mb-4 text-[#191919]">Berita & Insight Hukum</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Tetap terinformasi dengan perkembangan terbaru dalam hukum korporasi dan merek dagang
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {news.map((article, index) => (
            <Card key={index} className="border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-[#AE8737] mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{article.date}</span>
                </div>
                <h3 className="mb-3 text-[#191919] leading-snug">{article.title}</h3>
                <p className="text-slate-600 mb-5 leading-relaxed">{article.summary}</p>
                <a href="#" className="text-[#AE8737] hover:text-[#8f6e2d] inline-flex items-center gap-1 font-medium">
                  Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
