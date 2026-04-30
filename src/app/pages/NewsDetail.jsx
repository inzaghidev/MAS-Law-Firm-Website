import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { Calendar, Clock, ArrowUp } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function NewsDetail() {
  const { slug } = useParams();

  const [article, setArticle] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // ================= SCROLL =================
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ================= FETCH ARTICLE =================
  useEffect(() => {
    const fetchArticle = async () => {
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .eq("slug", slug)
        .single();

      if (!error && data) {
        setArticle(data);
        fetchRelated(data);
      }
    };

    fetchArticle();
  }, [slug]);

  // ================= FETCH RELATED =================
  const fetchRelated = async (currentArticle) => {
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .neq("id", currentArticle.id)
      .eq("status", "Published")
      .limit(3);

    if (!error) setRelatedNews(data || []);
  };

  // ================= LOADING =================
  if (!article) {
    return (
      <div className="py-32 text-center">
        <p className="text-slate-500">Loading article...</p>
      </div>
    );
  }

  const imageSrc = article.image_url || article.image || null;

  const words = article.content?.split(" ").length || 0;
  const readingTime = Math.ceil(words / 200);

  // ================= UI =================
  return (
    <section className="bg-white py-20">

      <div className="max-w-3xl mx-auto px-6">

        {/* CATEGORY */}
        {article.category && (
          <div className="mb-6">
            <span className="text-xs uppercase font-semibold text-[#AE8737] bg-[#AE8737]/10 px-3 py-1 rounded-full">
              {article.category}
            </span>
          </div>
        )}

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#191919] mb-6 leading-tight">
          {article.title}
        </h1>

        {/* META */}
        <div className="flex flex-wrap gap-6 text-sm text-slate-500 mb-10">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#AE8737]" />
            {new Date(article.date).toLocaleDateString("id-ID")}
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#AE8737]" />
            {readingTime} min read
          </div>
        </div>

        {/* IMAGE */}
        {imageSrc && (
          <div className="mb-12 rounded-xl overflow-hidden shadow">
            <img
              src={imageSrc}
              alt={article.title}
              className="w-full h-[420px] object-cover"
            />
          </div>
        )}

        {/* CONTENT */}
        <article className="text-lg text-slate-700 leading-relaxed">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ children }) => (
                <p className="mb-5 leading-relaxed">{children}</p>
              ),

              h2: ({ children }) => (
                <h2 className="text-2xl font-bold mt-10 mb-4 text-[#191919]">
                  {children}
                </h2>
              ),

              h3: ({ children }) => (
                <h3 className="text-xl font-semibold mt-8 mb-3 text-[#191919]">
                  {children}
                </h3>
              ),

              ul: ({ node, ...props }) => (
                <ul className="list-disc pl-6 mb-5 space-y-2" {...props} />
              ),

              ol: ({ node, ...props }) => (
                <ol className="list-decimal pl-6 mb-5 space-y-2" {...props} />
              ),

              li: ({ node, ...props }) => (
                <li className="leading-relaxed" {...props} />
              ),

              strong: ({ children }) => (
                <strong className="font-semibold text-[#191919]">
                  {children}
                </strong>
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

        {/* RELATED NEWS */}
        {relatedNews.length > 0 && (
          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-6 text-[#191919]">
              Artikel Lainnya
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedNews.map((item) => (
                <Link
                  key={item.id}
                  to={`/news/${item.slug}`}
                  className="group border rounded-xl overflow-hidden hover:shadow-lg"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-4">
                    <h4 className="text-sm font-semibold">{item.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* SCROLL BUTTON */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-[#AE8737] text-white p-3 rounded-full shadow-lg transition ${
          showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>

    </section>
  );
}
