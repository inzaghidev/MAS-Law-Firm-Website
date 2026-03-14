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
        console.error('Error fetching article:', error);
      } else {
        setArticle(data);
      }
    };

    fetchArticle();
  }, [slug]);

  if (!article) {
    return (
      <div className="py-24 text-center">
        <p className="text-slate-500">Loading article...</p>
      </div>
    );
  }

  // ======================
  // HANDLE IMAGE SOURCE
  // ======================
  const imageSrc =
    article.image_url || article.image || null;

  // ======================
  // FORMAT CONTENT PARAGRAPH
  // ======================
  const paragraphs = article.content
    ? article.content.split('\n').filter(p => p.trim() !== '')
    : [];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#191919] mb-4 leading-tight">
          {article.title}
        </h1>

        {/* Date */}
        <div className="flex items-center gap-2 text-[#AE8737] mb-8">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">
            {new Date(article.date).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </span>
        </div>

        {/* Image */}
        {imageSrc && (
          <img
            src={imageSrc}
            alt={article.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8 shadow-sm"
          />
        )}

        {/* Content */}
        <div
  className="text-slate-700 leading-relaxed space-y-4"
  dangerouslySetInnerHTML={{
    __html: article.content
      ?.replace(/\n/g, '<br/>')
      ?.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  }}
></div>

      </div>
    </section>
  );
}