import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import logo from "/logo.png";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer
      id="kontak"
      className="bg-[#191919] text-white py-16"
    >
      <div className="container mx-auto px-6">
        {/* Grid sekarang 5 kolom */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logo}
                alt="M.A.S Law Firm"
                className="h-16"
              />
            </div>
            <p className="text-slate-400 leading-relaxed">
              Mitra terpercaya Anda dalam hukum korporasi dan
              layanan hukum profesional.
            </p>
          </div>

          {/* Alamat */}
          <div>
            <h4 className="mb-5 text-[#AE8737] font-semibold">
              Informasi Kontak
            </h4>
            <div className="space-y-4 text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-[#AE8737]" />
                <span>
                  Graha Citra Unit BC, Ruko Estrela, Banjar
                  Wijaya No.6, Cipete, Kec. Pinang, Kota
                  Tangerang, Banten 15144 Indonesia
                </span>
              </div>
            </div>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="mb-5 text-[#AE8737] font-semibold">
              Hubungi Kami
            </h4>
            <div className="space-y-4 text-slate-400">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#AE8737]" />
                <span>+62 895 3040 7021</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#AE8737]" />
                <span>kantorpengacaramas@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#AE8737]" />
                <a
                  href="https://wa.me/6289530407021"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +62 895 3040 7021
                </a>
              </div>
            </div>
          </div>

          {/* Jam */}
          <div>
            <h4 className="mb-5 text-[#AE8737] font-semibold">
              Jam Operasional
            </h4>
            <div className="text-slate-400 space-y-2 leading-relaxed">
              <p>Senin - Jumat</p>
              <p className="mb-3">09.00 - 18.00 WIB</p>
              <p>Sabtu</p>
              <p>09.00 - 14.00 WIB</p>
            </div>
          </div>

          {/* ===== KOLOM BARU (PENTING) ===== */}
          <div>
            <h4 className="mb-5 text-[#AE8737] font-semibold">
              Layanan Publik
            </h4>

            <div className="space-y-3 text-slate-400">

              <Link
                to="/verify"
                className="flex items-center gap-3 group hover:text-white transition-colors"
              >
                <ShieldCheck className="w-5 h-5 text-[#AE8737] group-hover:scale-110 transition-transform" />
                <span>
                  Verifikasi Dokumen Online
                </span>
              </Link>

              <p className="text-xs text-slate-500 leading-relaxed">
                Cek keaslian dokumen resmi yang diterbitkan oleh
                M.A.S Law Firm secara online.
              </p>

              {/* Lynk */}
              <a
                href="https://lynk.id/maslawfirm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white"
              >
                <MessageCircle className="w-5 h-5 text-[#AE8737]" />
                <span>Konsultasi & Layanan Cepat</span>
              </a>

              <p className="text-xs text-slate-500">
                Akses seluruh layanan hukum dalam satu halaman.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#2a2a2a] pt-8 text-center text-slate-400">
          <p>
            &copy; 2026 M.A.S. Law Firm. All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
