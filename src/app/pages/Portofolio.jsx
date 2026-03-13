import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import portfolioImg1 from "../../assets/reddream-services-partnership.png";
import portfolioImg2 from "../../assets/islamic-book-fair.png";
import portfolioImg3 from "../../assets/pertemuan-strategis-tim-legal.png";
import portfolioImg4 from "../../assets/legal-advisory.png";

export function Portofolio() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedCase, setSelectedCase] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCase) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCase]);

  const portfolioItems = [
    {
      id: 1,
      title: "Pendirian PT PMA",
      description: "Konsultasi Hukum Bisnis & Perizinan",
      image: portfolioImg1,
      detailedDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.\n\nTotam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
      id: 2,
      title: "Internatioal Client",
      description: "Legal Advisory & Event Partnership",
      image: portfolioImg2,
      detailedDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.\n\nDonec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.\n\nAenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.",
    },
    {
      id: 3,
      title: "Pendampingan Pemeriksaan BPJS Ketenagakerjaan",
      description: "Pertemuan Strategis dengan Klien Korporat",
      image: portfolioImg3,
      detailedDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit mollis lacus. Nam adipiscing. Vestibulum eu odio. Vivamus laoreet. Nullam tincidunt adipiscing enim. Phasellus tempus.\n\nProin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Fusce neque. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.\n\nVivamus aliquet elit ac nisl. Fusce fermentum odio nec arcu. Vivamus euismod mauris. In ut quam vitae odio lacinia tincidunt. Praesent ut ligula non mi varius sagittis. Cras sagittis. Praesent ac sem eget est egestas volutpat.",
    },
    {
      id: 4,
      title: "Meditor",
      description: "Pendampingan Hukum & Legal Advisory",
      image: portfolioImg4,
      detailedDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.\n\nPraesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.\n\nCurabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.",
    },
  ];

  return (
    <section className="py-24 bg-[#191919] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#191919] via-[#252525] to-[#191919]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-[#AE8737] mb-6"></div>
          <h2 className="mb-4">Rekam Jejak & Portofolio</h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Dipercaya oleh klien dan mitra terkemuka di berbagai industri
          </p>
        </div>

        {/* 2x2 Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#252525] cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedCase(item)}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-[#191919] via-[#191919]/80 to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="w-12 h-1 bg-[#AE8737] mb-4"></div>
                  <h3 className="text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 mb-4">{item.description}</p>
                  <button className="px-5 py-2 bg-[#AE8737] text-white rounded hover:bg-[#8a6a2b] transition-colors duration-300">
                    Lihat Detail
                  </button>
                </div>
              </div>

              {/* Border effect on hover */}
              <div
                className={`absolute inset-0 border-2 border-[#AE8737] rounded-lg transition-opacity duration-300 pointer-events-none ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Detail Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[#191919]/90 backdrop-blur-sm"
              onClick={() => setSelectedCase(null)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-[#191919]/10 hover:bg-[#191919]/20 rounded-full transition-colors text-[#191919]"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Section */}
              <div className="w-full aspect-[16/9] bg-gray-100 overflow-hidden">
                <img
                  src={selectedCase.image}
                  alt={selectedCase.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-12">
                {/* Case Title */}
                <div className="mb-8">
                  <div className="w-16 h-1 bg-[#AE8737] mb-4"></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#191919] mb-3">
                    {selectedCase.title}
                  </h2>
                  <p className="text-xl text-[#AE8737] font-semibold">
                    {selectedCase.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gray-200 mb-8"></div>

                {/* Case Description */}
                <div className="prose prose-lg max-w-none">
                  <h3 className="text-xl font-bold text-[#191919] mb-4 flex items-center">
                    Deskripsi Kasus
                    <span className="ml-4 h-px flex-1 bg-[#AE8737]"></span>
                  </h3>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {selectedCase.detailedDescription}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
