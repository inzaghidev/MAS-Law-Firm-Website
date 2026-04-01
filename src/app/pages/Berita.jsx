import { useEffect, useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { supabase } from '../../lib/supabase';
import { Link } from 'react-router-dom';

export function Berita() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .eq('status', 'Published')
        .lte('date', new Date().toISOString())
        .order('date', { ascending: false });

      if (error) {
        console.error('Error fetching news:', error);
      } else {
        setNews(data || []);
      }
    };

    fetchNews();
  }, []);

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
          {news.map((article) => (
            <Card
              key={article.id}
              className="border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={article.image_url}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-[#AE8737] mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{article.date}</span>
                </div>

                <h3 className="mb-3 text-[#191919] leading-snug">
                  {article.title}
                </h3>

                <p className="text-slate-600 mb-5 leading-relaxed">
                  {article.summary}
                </p>

                <Link
                  to={`/news/${article.slug}`}
                  className="text-[#AE8737] hover:text-[#8f6e2d] inline-flex items-center gap-1 font-medium"
                >
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
