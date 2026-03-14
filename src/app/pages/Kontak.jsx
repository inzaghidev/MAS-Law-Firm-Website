import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

export function Kontak() {
  return (
    <section className="py-24 bg-[#191919]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-[#AE8737] mb-6"></div>
          <h2 className="mb-4 text-[#AE8737]">Hubungi Kami</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Kami siap membantu Anda dengan kebutuhan hukum
            bisnis Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Phone Card */}
          <a
            href="tel:6289530407021"
            className="block h-full"
          >
            <Card className="h-full bg-[#1a1a1a] border border-[#AE8737] hover:bg-[#AE8737]/10 hover:shadow-[0_0_15px_rgba(174,135,55,0.3)] transition-all duration-300 group">
              <CardContent className="p-8 text-center flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 bg-[#AE8737]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-[#AE8737] fill-[#AE8737]" />
                </div>
                <h3 className="mb-3 text-white text-xl font-semibold group-hover:text-[#AE8737] transition-colors">Telepon</h3>
                <span className="text-gray-200 text-lg font-medium tracking-wide">
                  +62 895 3040 7021
                </span>
              </CardContent>
            </Card>
          </a>

          {/* Email Card */}
          <a
            href="mailto:kantorpengacaramas@gmail.com"
            className="block h-full"
          >
            <Card className="h-full bg-[#1a1a1a] border border-[#AE8737] hover:bg-[#AE8737]/10 hover:shadow-[0_0_15px_rgba(174,135,55,0.3)] transition-all duration-300 group">
              <CardContent className="p-8 text-center flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 bg-[#AE8737]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-[#AE8737] fill-[#AE8737]" />
                </div>
                <h3 className="mb-3 text-white text-xl font-semibold group-hover:text-[#AE8737] transition-colors">Email</h3>
                <span className="text-gray-200 text-lg font-medium tracking-wide break-all">
                  kantorpengacaramas@gmail.com
                </span>
              </CardContent>
            </Card>
          </a>

          {/* WhatsApp Card */}
          <a
            href="https://wa.me/6289530407021"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
          >
            <Card className="h-full bg-[#1a1a1a] border border-[#AE8737] hover:bg-[#AE8737]/10 hover:shadow-[0_0_15px_rgba(174,135,55,0.3)] transition-all duration-300 group">
              <CardContent className="p-8 text-center flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 bg-[#AE8737]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8 text-[#AE8737] fill-[#AE8737]" />
                </div>
                <h3 className="mb-3 text-white text-xl font-semibold group-hover:text-[#AE8737] transition-colors">WhatsApp</h3>
                <span className="text-gray-200 text-lg font-medium tracking-wide">
                  +62 895 3040 7021
                </span>
              </CardContent>
            </Card>
          </a>
        </div>

        {/* Info Card (Address & Hours) */}
        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="bg-[#1a1a1a] border border-[#AE8737] shadow-xl relative overflow-hidden">
             {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#AE8737]/5 to-transparent pointer-events-none"></div>
            
            <CardContent className="p-8 md:p-10 relative z-10">
              <div className="grid md:grid-cols-2 gap-10">
                {/* Address */}
                <div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#AE8737]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="w-5 h-5 text-[#AE8737] fill-[#AE8737]" />
                    </div>
                    <div>
                      <h3 className="mb-3 text-white text-xl font-semibold">
                        Alamat Kantor
                      </h3>
                      <a
                        href="https://maps.app.goo.gl/U7Vhbspoe4EM16p5A"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-[#AE8737] transition-colors leading-relaxed block"
                      >
                        Unit BC, Ruko Estrela,
                        <br />
                        Banjar Wijaya No.6, Cipete,
                        <br />
                        Kec. Pinang, Kota Tangerang, Banten
                        <br />
                        15142
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#AE8737]/10 flex items-center justify-center flex-shrink-0 mt-1">
                       <Clock className="w-5 h-5 text-[#AE8737] fill-[#AE8737]" />
                    </div>
                    <div>
                      <h3 className="mb-3 text-white text-xl font-semibold">
                        Jam Operasional
                      </h3>
                      <div className="text-gray-300 leading-relaxed space-y-1">
                        <div className="flex justify-between w-full max-w-[200px]">
                          <span>Senin - Jumat</span>
                          <span className="text-white font-medium">09.00 - 17.00</span>
                        </div>
                        <div className="flex justify-between w-full max-w-[200px]">
                          <span>Sabtu</span>
                          <span className="text-white font-medium">09.00 - 14.00</span>
                        </div>
                         <div className="flex justify-between w-full max-w-[200px] text-red-400">
                          <span>Minggu</span>
                          <span className="font-medium">Tutup</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
