import { Link } from 'react-router-dom';
import { Home, Newspaper, Briefcase, Users, UserCheck, Building2, Scale, Mail, FileText } from 'lucide-react';

export function Sitemap() {
  const sitePages = [
    {
      title: 'Beranda',
      path: '/',
      description: 'Halaman utama M.A.S Law Firm dengan informasi lengkap tentang firma hukum kami',
      icon: Home
    },
    {
      title: 'Layanan Kami',
      path: '/layanan-kami',
      description: 'Daftar lengkap layanan hukum profesional yang kami tawarkan',
      icon: Scale
    },
    {
      title: 'Tim Pengacara',
      path: '/tim-pengacara',
      description: 'Profil lengkap tim pengacara profesional kami',
      icon: Users
    },
    {
      title: 'Asisten',
      path: '/asisten',
      description: 'Tim asisten legal yang mendukung layanan hukum kami',
      icon: UserCheck
    },
    {
      title: 'Staf Perusahaan',
      path: '/staf-perusahaan',
      description: 'Tim staf administrasi dan operasional perusahaan',
      icon: Building2
    },
    {
      title: 'Portofolio',
      path: '/portofolio',
      description: 'Kasus dan proyek hukum yang telah kami tangani',
      icon: Briefcase
    },
    {
      title: 'Berita',
      path: '/berita',
      description: 'Berita terkini, artikel, dan pembaruan dari M.A.S Law Firm',
      icon: Newspaper
    },
    {
      title: 'Kontak',
      path: '/kontak',
      description: 'Hubungi kami untuk konsultasi dan informasi lebih lanjut',
      icon: Mail
    }
  ];

  const handleViewXMLSitemap = () => {
    window.open('/sitemap.xml', '_blank');
  };

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <FileText className="w-10 h-10 text-[#AE8737]" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-6 text-[#191919]">
            Peta Situs
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Temukan semua halaman dan informasi yang tersedia di situs web M.A.S Law Firm
          </p>
          
          {/* View XML Sitemap Button */}
          <button
            onClick={handleViewXMLSitemap}
            className="inline-flex items-center gap-2 bg-[#AE8737] text-white px-8 py-3 rounded-lg hover:bg-[#8f6d2d] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FileText className="w-5 h-5" />
            Lihat XML Sitemap
          </button>
        </div>

        {/* Pages Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {sitePages.map((page, index) => {
            const Icon = page.icon;
            return (
              <Link
                key={index}
                to={page.path}
                className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#AE8737] transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#AE8737]/10 rounded-lg group-hover:bg-[#AE8737] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#AE8737] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-2 text-[#191919] group-hover:text-[#AE8737] transition-colors duration-300">
                      {page.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {page.description}
                    </p>
                    <div className="mt-3 text-[#AE8737] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Kunjungi halaman →
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* SEO Information */}
        <div className="mt-16 bg-gray-50 border-2 border-gray-200 rounded-xl p-8">
          <h2 className="text-2xl mb-4 text-[#191919]">
            Tentang Peta Situs
          </h2>
          <div className="text-gray-600 space-y-3 leading-relaxed">
            <p>
              Peta situs ini membantu Anda menavigasi seluruh konten yang tersedia di situs web M.A.S Law Firm dengan mudah. 
              Setiap halaman telah dioptimalkan untuk membantu mesin pencari seperti Google mengindeks konten kami dengan lebih baik.
            </p>
            <p>
              Untuk melihat versi XML sitemap yang digunakan oleh mesin pencari, silakan klik tombol 
              <span className="text-[#AE8737] font-medium"> "Lihat XML Sitemap" </span> 
              di atas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
