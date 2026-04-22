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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-[#AE8737] mb-6"></div>
          <h2 className="mb-4 text-2xl font-bold text-[#191919]">
            Konsultasi Gratis Sekarang!
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Kami siap membantu kebutuhan hukum bisnis Anda dengan respon cepat dan profesional
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {/* TELEPON */}
          <a href="tel:6289530407021" className="block">
            <Card className="bg-white border border-slate-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#AE8737]/5 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition">
                  <Phone className="w-7 h-7 text-[#AE8737]" />
                </div>
                <h3 className="text-lg font-semibold text-[#191919] mb-2">
                  Telepon
                </h3>
                <p className="text-slate-600">
                  +62 895 3040 7021
                </p>
              </CardContent>
            </Card>
          </a>

          {/* EMAIL */}
          <a href="mailto:kantorpengacaramas@gmail.com" className="block">
            <Card className="bg-white border border-slate-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#AE8737]/5 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition">
                  <Mail className="w-7 h-7 text-[#AE8737]" />
                </div>
                <h3 className="text-lg font-semibold text-[#191919] mb-2">
                  Email
                </h3>
                <p className="text-slate-600 break-all">
                  kantorpengacaramas@gmail.com
                </p>
              </CardContent>
            </Card>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/6289530407021"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="bg-white border border-slate-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#AE8737]/5 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition">
                  <MessageCircle className="w-7 h-7 text-[#AE8737]" />
                </div>
                <h3 className="text-lg font-semibold text-[#191919] mb-2">
                  WhatsApp
                </h3>
                <p className="text-slate-600">
                  Chat Sekarang
                </p>
              </CardContent>
            </Card>
          </a>

        </div>

        {/* ADDRESS & HOURS */}
        <div className="mt-16 max-w-5xl mx-auto">
          <Card className="bg-white border border-slate-200 shadow-sm">
            <CardContent className="p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-10">

                {/* ALAMAT */}
                <div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#AE8737]/5 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#AE8737]" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#191919] mb-2">
                        Alamat Kantor
                      </h3>

                      <a
                        href="https://maps.google.com/?q=Ruko+Estrela+Banjar+Wijaya+No.6+Tangerang"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-[#AE8737] transition leading-relaxed"
                      >
                        Unit BC, Ruko Estrela,
                        <br />
                        Banjar Wijaya No.6, Cipete,
                        <br />
                        Kec. Pinang, Kota Tangerang
                      </a>
                    </div>
                  </div>
                </div>

                {/* JAM */}
                <div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#AE8737]/5 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-[#AE8737]" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#191919] mb-2">
                        Jam Operasional
                      </h3>

                      <div className="text-slate-600 space-y-1">
                        <div className="flex justify-between max-w-[220px]">
                          <span>Senin - Jumat</span>
                          <span className="font-medium text-[#191919]">
                            09.00 - 17.00
                          </span>
                        </div>

                        <div className="flex justify-between max-w-[220px]">
                          <span>Sabtu</span>
                          <span className="font-medium text-[#191919]">
                            09.00 - 14.00
                          </span>
                        </div>

                        <div className="flex justify-between max-w-[220px] text-red-500">
                          <span>Minggu</span>
                          <span>Tutup</span>
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
