import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Calendar } from 'lucide-react';

export function NewsDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) {
        console.error(error);
      } else {
        setArticle(data);
      }
    };

    fetchArticle();
  }, [slug]);

  if (!article) {
    return (
      <div className="py-24 text-center">
        <p>Loading article...</p>
      </div>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">

        {/* Title */}
        <h1 className="text-3xl font-bold text-[#191919] mb-4">
          {article.title}
        </h1>

        {/* Date */}
        <div className="flex items-center gap-2 text-[#AE8737] mb-6">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">{article.date}</span>
        </div>

        {/* Image */}
        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
        )}

        {/* Content */}
        <div
          className="prose prose-lg max-w-none
                     prose-headings:text-[#191919]
                     prose-strong:text-[#191919]
                     prose-strong:font-semibold
                     prose-p:text-slate-700
                     prose-li:text-slate-700
                     prose-a:text-[#AE8737]"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

      </div>
    </section>
  );
}