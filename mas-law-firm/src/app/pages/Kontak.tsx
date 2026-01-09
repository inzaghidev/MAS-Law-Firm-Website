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
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-[#AE8737] mb-6"></div>
          <h2 className="mb-4 text-[#191919]">Hubungi Kami</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Kami siap membantu Anda dengan kebutuhan hukum
            bisnis Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-[#AE8737]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-[#AE8737]" />
              </div>
              <h3 className="mb-2 text-[#191919]">Telepon</h3>
              <p className="text-slate-600">
                +62 895 3040 7021
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-[#AE8737]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-[#AE8737]" />
              </div>
              <h3 className="mb-2 text-[#191919]">Email</h3>
              <p className="text-slate-600">
                kantorpengacaramas@gmail.com
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-[#AE8737]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-[#AE8737]" />
              </div>
              <h3 className="mb-2 text-[#191919]">WhatsApp</h3>
              <a
                href="https://wa.me/6289530407021"
                className="text-[#AE8737] hover:text-[#8f6e2d]"
              >
                +62 895 3040 7021
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-start gap-3 mb-6">
                    <MapPin className="w-6 h-6 text-[#AE8737] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="mb-2 text-[#191919]">
                        Alamat Kantor
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        Unit BC, Ruko Estrela,
                        <br />
                        Banjar Wijaya No.6, Cipete,
                        <br />
                        Kec. Pinang, Kota Tangerang, Banten
                        <br />
                        15142
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-[#AE8737] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="mb-2 text-[#191919]">
                        Jam Operasional
                      </h3>
                      <div className="text-slate-600 leading-relaxed">
                        <p>Senin - Jumat</p>
                        <p className="mb-3">
                          09.00 - 17.00 WIB
                        </p>
                        <p>Sabtu</p>
                        <p>09.00 - 14.00 WIB</p>
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