import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import heroBackground from "../../assets/law-illustration-background.png";

export function Beranda() {
  return (
    <section className="relative bg-white py-28 md:py-36">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
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
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/kontak">
            <Button
              size="lg"
              className="bg-[#AE8737] hover:bg-[#8f6e2d] text-white px-8 shadow-lg shadow-[#AE8737]/20"
            >
              Konsultasi Sekarang <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
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
      </div>
    </section>
  );
}
