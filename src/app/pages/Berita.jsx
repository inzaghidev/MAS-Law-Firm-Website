import { useEffect, useState } from 'react';
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { supabase } from '../../lib/supabase';
import { Link } from 'react-router-dom';

export function Berita() {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;

  // =========================
  // FETCH DATA
  // =========================
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

  // =========================
  // FILTER SEARCH
  // =========================
  const filteredNews = news.filter((article) =>
    article.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // =========================
  // PAGINATION
  // =========================
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  const currentNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (pageNumber) => setCurrentPage(pageNumber);
  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrevPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));

  const getPaginationItems = () => {
    if (totalPages <= 6) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, '⋯', totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, '⋯', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, '⋯', currentPage - 1, currentPage, currentPage + 1, '⋯', totalPages];
  };

  const paginationItems = getPaginationItems();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-[#AE8737] mb-6"></div>
          <h2 className="mb-4 text-[#191919] text-2xl font-bold">
            Berita & Insight Hukum
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Tetap terinformasi dengan perkembangan terbaru dalam hukum korporasi dan merek dagang
          </p>
        </div>

        {/* SEARCH */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Cari artikel..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full max-w-md px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AE8737]"
          />
        </div>

        {/* EMPTY STATE */}
        {filteredNews.length === 0 && (
          <p className="text-center text-slate-500 mt-10">
            Artikel tidak ditemukan 😢
          </p>
        )}

        {/* GRID */}
        <div className="relative max-w-[1400px] mx-auto w-full px-2 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {currentNews.map((article) => (
              <Card
                key={article.id}
                className="border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >

                {/* IMAGE */}
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={article.image_url || "/no-image.jpg"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                <CardContent className="p-6">

                  {/* DATE */}
                  <div className="flex items-center gap-2 text-[#AE8737] mb-3">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">
                      {new Date(article.date).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="mb-3 text-[#191919] font-semibold leading-snug line-clamp-2 group-hover:text-[#AE8737] transition">
                    {article.title}
                  </h3>

                  {/* SUMMARY */}
                  <p className="text-slate-600 mb-5 leading-relaxed line-clamp-3 min-h-[72px]">
                    {article.summary || "Tidak ada ringkasan artikel."}
                  </p>

                  {/* LINK */}
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

          {/* FLOATING ARROWS */}
          {totalPages > 1 && (
            <>
              <button
                onClick={goToPrevPage}
                disabled={currentPage === 1}
                className={`hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full w-10 h-10 items-center justify-center shadow-lg border ${
                  currentPage === 1
                    ? 'opacity-0 pointer-events-none'
                    : 'hover:bg-slate-50'
                }`}
              >
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>

              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full w-10 h-10 items-center justify-center shadow-lg border ${
                  currentPage === totalPages
                    ? 'opacity-0 pointer-events-none'
                    : 'hover:bg-slate-50'
                }`}
              >
                <ChevronRight className="w-5 h-5 text-slate-600" />
              </button>
            </>
          )}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 gap-3">

            <button
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className={`p-2 rounded-full border ${
                currentPage === 1
                  ? 'text-slate-400 border-slate-200'
                  : 'text-[#AE8737] border-[#AE8737] hover:bg-[#AE8737] hover:text-white'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {paginationItems.map((item, index) =>
              item === '⋯' ? (
                <span key={index} className="px-2 text-slate-400">
                  {item}
                </span>
              ) : (
                <button
                  key={index}
                  onClick={() => goToPage(item)}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center ${
                    currentPage === item
                      ? 'bg-[#AE8737] text-white border-[#AE8737]'
                      : 'text-slate-600 border-slate-300 hover:border-[#AE8737] hover:text-[#AE8737]'
                  }`}
                >
                  {item}
                </button>
              )
            )}

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full border ${
                currentPage === totalPages
                  ? 'text-slate-400 border-slate-200'
                  : 'text-[#AE8737] border-[#AE8737] hover:bg-[#AE8737] hover:text-white'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>
        )}

      </div>
    </section>
  );
}
