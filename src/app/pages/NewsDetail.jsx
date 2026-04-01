import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { Calendar, Clock } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function NewsDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .eq("slug", slug)
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
      <div className="py-32 text-center">
        <p className="text-slate-500">Loading article...</p>
      </div>
    );
  }

  const imageSrc = article.image_url || article.image || null;

  // reading time
  const words = article.content?.split(" ").length || 0;
  const readingTime = Math.ceil(words / 200);

  return (
    <section className="bg-white py-20">

      <div className="max-w-3xl mx-auto px-6">

        {/* CATEGORY */}
        {article.category && (
          <div className="mb-6">
            <span className="text-xs tracking-widest uppercase font-semibold text-[#AE8737] bg-[#AE8737]/10 px-3 py-1 rounded-full">
              {article.category}
            </span>
          </div>
        )}

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#191919] leading-tight mb-6">
          {article.title}
        </h1>

        {/* META */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 mb-10">

          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#AE8737]" />
            {new Date(article.date).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#AE8737]" />
            {readingTime} min read
          </div>

        </div>

        {/* HERO IMAGE */}
        {imageSrc && (
          <div className="mb-12 overflow-hidden rounded-xl shadow-sm">
            <img
              src={imageSrc}
              alt={article.title}
              className="w-full h-[420px] object-cover"
            />
          </div>
        )}

        {/* ARTICLE BODY */}
        <article className="text-[18px] leading-relaxed text-slate-700">

          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{

              p: ({ children }) => (
                <p className="mb-4">{children}</p>
              ),

              h2: ({ children }) => (
                <h2 className="text-2xl font-semibold mt-10 mb-3 text-[#191919]">
                  {children}
                </h2>
              ),

              h3: ({ children }) => (
                <h3 className="text-xl font-semibold mt-8 mb-2 text-[#191919]">
                  {children}
                </h3>
              ),

              ul: ({ children }) => (
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  {children}
                </ul>
              ),

              ol: ({ children }) => (
                <ol className="list-decimal pl-6 mb-4 space-y-1">
                  {children}
                </ol>
              ),

              li: ({ children }) => (
                <li className="leading-relaxed [&>p]:mb-0">
                  {children}
                </li>
              ),

              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-[#AE8737] underline hover:opacity-80"
                  target="_blank"
                  rel="noreferrer"
                >
                  {children}
                </a>
              ),

              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-[#AE8737] pl-4 italic my-6 text-slate-600">
                  {children}
                </blockquote>
              ),
            }}
          >
            {article.content}
          </ReactMarkdown>

        </article>

      </div>
    </section>
  );
}