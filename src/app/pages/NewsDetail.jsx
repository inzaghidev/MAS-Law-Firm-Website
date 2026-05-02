import { useParams, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { supabase } from "../../lib/supabase";
import {
  Calendar,
  Clock,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function NewsDetail() {
  const { slug } = useParams();

  const [article, setArticle] = useState(null);
  const [recommendedNews, setRecommendedNews] = useState([]);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sliderRef = useRef(null);

  // ================= SCROLL TOP =================
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
      const { data } = await supabase
        .from("news")
        .select("*")
        .eq("slug", slug)
        .single();

      if (data) {
        setArticle(data);
        fetchRecommended(data.id);
      }
    };

    fetchArticle();
  }, [slug]);

  // ================= FETCH ALL OTHER ARTICLES =================
  const fetchRecommended = async (currentId) => {
    const { data } = await supabase
      .from("news")
      .select("*")
      .neq("id", currentId)
      .eq("status", "Published")
      .order("date", { ascending: false });

    setRecommendedNews(data || []);
  };

  // ================= SLIDER =================
  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;

    const amount = 320;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

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
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {article.content}
          </ReactMarkdown>
        </article>

      </div>

      {/* RECOMMENDED ARTICLES */}
      {recommendedNews.length > 0 && (
        <div className="mt-24 max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-[#191919]">
              Artikel yang Mungkin Kamu Sukai
            </h3>

            <div className="flex gap-2">
              <button
                onClick={() => scrollSlider("left")}
                className="w-10 h-10 rounded-full border hover:bg-slate-100 flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => scrollSlider("right")}
                className="w-10 h-10 rounded-full border hover:bg-slate-100 flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
          >
            {recommendedNews.map((item) => (
              <Link
                key={item.id}
                to={`/news/${item.slug}`}
                className="min-w-[300px] max-w-[300px] flex-shrink-0 group border rounded-2xl overflow-hidden hover:shadow-xl transition"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-4">
                  <h4 className="font-semibold text-[#191919] line-clamp-2 group-hover:text-[#AE8737] transition">
                    {item.title}
                  </h4>

                  <p className="text-sm text-slate-500 mt-2">
                    {new Date(item.date).toLocaleDateString("id-ID")}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* SCROLL TO TOP */}
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