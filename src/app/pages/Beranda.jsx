import {
  ArrowRight,
  Scale,
  Building2,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
// import heroBackground from "../hero.jpg"; // File is in public folder
import { VisiMisi } from "../components/VisiMisi";

export function Beranda() {
  return (
    <>
      <section className="relative bg-white py-28 md:py-36">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/hero.jpg)` }}
        ></div>

        {/* Dark Overlay (50% opacity) */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-[#AE8737]/10 border border-[#AE8737]/20 rounded-full backdrop-blur-md">
            <span className="text-[#AE8737] text-sm tracking-wide">
              Dipercaya oleh Perusahaan Terkemuka
            </span>
          </div>
          <h1 className="mb-6 max-w-4xl mx-auto leading-tight text-white">
            Solusi Hukum Profesional untuk Kesuksesan Bisnis Anda
          </h1>
          <p className="mb-10 max-w-2xl mx-auto text-lg text-white/90 leading-relaxed">
            Konsultan hukum terpercaya dengan pengalaman di bidang hukum
            korporasi, pendaftaran merek, dan pendirian perusahaan.
          </p>
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://heyzine.com/flip-book/e301844c27.html#page/2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-[#AE8737] hover:bg-[#8f6e2d] text-white px-8 shadow-lg shadow-[#AE8737]/20"
                >
                  Our Company Profile <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Link to="/layanan-kami">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#191919] px-8"
                >
                  Lihat Layanan
                </Button>
              </Link>
            </div>
            {/* Informative Sub-text */}
            <p className="mt-6 text-sm text-gray-300 font-light tracking-wide max-w-md mx-auto">
              Jelajahi profil lengkap dan keunggulan firma kami.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE SECTION */}
      <section className="py-24 bg-white text-black">
        <div className="container mx-auto px-6">
          {/* Title */}
          <div className="text-center mb-16">
            <div className="w-12 h-1 bg-[#AE8737] mx-auto mb-6"></div>
            <h2 className="text-3xl font-bold mb-4">
              Layanan Hukum Profesional
            </h2>
            <p className="text-slate-700 max-w-2xl mx-auto">
              Kami menyediakan layanan hukum strategis untuk membantu bisnis
              berkembang secara aman dan sesuai regulasi yang berlaku.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Corporate Lawyer */}
            <Link
              to="/layanan-kami"
              className="group bg-[#252525] p-8 rounded-lg border border-[#2f2f2f] hover:border-[#AE8737] transition duration-300"
            >
              <Scale className="w-10 h-10 text-[#AE8737] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#AE8737]">
                Corporate Law
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Pendampingan hukum profesional untuk perusahaan dan aktivitas
                bisnis.
              </p>
            </Link>

            {/* Company Establishment */}
            <Link
              to="/layanan-kami"
              className="group bg-[#252525] p-8 rounded-lg border border-[#2f2f2f] hover:border-[#AE8737] transition duration-300"
            >
              <Building2 className="w-10 h-10 text-[#AE8737] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#AE8737]">
                Pendirian Perusahaan
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Layanan pendirian PT, PT PMA, dan legalitas usaha secara
                profesional.
              </p>
            </Link>

            {/* Trademark */}
            <Link
              to="/layanan-kami"
              className="group bg-[#252525] p-8 rounded-lg border border-[#2f2f2f] hover:border-[#AE8737] transition duration-300"
            >
              <ShieldCheck className="w-10 h-10 text-[#AE8737] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#AE8737]">
                Pendaftaran Haki
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Perlindungan hukum atas merek dan kekayaan intelektual bisnis
                Anda.
              </p>
            </Link>

            {/* Business Contract */}
            <Link
              to="/layanan-kami"
              className="group bg-[#252525] p-8 rounded-lg border border-[#2f2f2f] hover:border-[#AE8737] transition duration-300"
            >
              <FileText className="w-10 h-10 text-[#AE8737] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#AE8737]">
                Litigasi & Mediasi
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Penyelesaian sengketa secara profesional dan strategis.
              </p>
            </Link>
          </div>

          {/* Button */}
          <div className="text-center mt-14">
            <Link to="/layanan-kami">
              <Button
                size="lg"
                className="bg-[#AE8737] hover:bg-[#8f6e2d] text-[#191919] px-8"
              >
                Lihat Semua Layanan
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* VISI MISI */}
      <VisiMisi />
    </>
  );
}
