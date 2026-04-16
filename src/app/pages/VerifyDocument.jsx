import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import {
  Search,
  CheckCircle,
  XCircle,
  FileText,
  ShieldCheck,
} from "lucide-react";

export function VerifyDocument() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  // Ambil code dari URL jika ada (?code=XXX)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlCode = params.get("code");
    if (urlCode) {
      setCode(urlCode);
      verifyDocument(urlCode);
    }
  }, []);

  const verifyDocument = async (docCode) => {
    setLoading(true);
    setResult(null);
    setNotFound(false);

    const { data, error } = await supabase
      .from("documents")
      .select("*")
      .eq("code", docCode.toUpperCase())
      .single();

    if (error || !data) {
      setNotFound(true);
    } else {
      setResult(data);
    }

    setLoading(false);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    verifyDocument(code);
  };

  // URL untuk QR (encode agar aman)
  const verifyUrl = `${window.location.origin}/verify?code=${encodeURIComponent(code)}`;

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-[#AE8737]/10 rounded-xl mb-4">
            <ShieldCheck className="w-7 h-7 text-[#AE8737]" />
          </div>
          <h1 className="text-3xl font-bold text-[#191919] mb-3">
            Verifikasi Keaslian Dokumen
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto">
            Masukkan kode dokumen untuk memastikan keaslian dokumen resmi yang
            diterbitkan oleh MAS Law Firm.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleVerify}
          className="bg-white shadow-xl rounded-2xl p-6 mb-10 border border-slate-100"
        >
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Contoh: DOC-2026-001"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AE8737] font-mono uppercase"
              required
            />
            <button
              type="submit"
              className="bg-[#AE8737] hover:bg-[#8f6e2d] text-[#191919] px-6 rounded-lg flex items-center gap-2 font-medium"
            >
              <Search className="w-4 h-4" />
              Verifikasi
            </button>
          </div>
        </form>

        {/* Loading */}
        {loading && (
          <div className="text-center text-slate-500">
            Memverifikasi dokumen...
          </div>
        )}

        {/* Not Found */}
        {notFound && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center shadow">
            <XCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="font-bold text-red-700 text-lg">
              Dokumen Tidak Ditemukan
            </h3>
            <p className="text-sm text-red-600 mt-2">
              Pastikan kode yang dimasukkan benar atau hubungi kantor kami.
            </p>
          </div>
        )}

        {/* Result */}
        {result && (
          <div className="bg-white shadow-2xl rounded-2xl p-8 border border-green-200">
            {/* Status */}
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-7 h-7 text-green-600" />
              <h3 className="text-xl font-bold text-green-700">
                Dokumen Terverifikasi
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-sm text-slate-700">
              {/* Info Dokumen */}
              <div className="space-y-2">
                <p>
                  <b>Kode:</b> {result.code}
                </p>
                <p>
                  <b>Nama Klien:</b> {result.clientName}
                </p>
                <p>
                  <b>Jenis:</b> {result.type}
                </p>
                <p>
                  <b>Tanggal Terbit:</b> {result.issueDate}
                </p>
                <p>
                  <b>Status:</b>{" "}
                  <span
                    className={
                      result.status === "Valid"
                        ? "text-green-600 font-semibold"
                        : "text-red-600 font-semibold"
                    }
                  >
                    {result.status}
                  </span>
                </p>

                {(() => {
                  let files = [];

                  try {
                    if (typeof result.files === "string") {
                      // 🔥 kalau string JSON
                      files = JSON.parse(result.files);
                    } else if (Array.isArray(result.files)) {
                      files = result.files;
                    } else if (result.files) {
                      files = [result.files];
                    }
                  } catch (e) {
                    console.error("PARSE ERROR:", e);
                    files = [];
                  }

                  console.log("FILES FIXED:", files);

                  return (
                    files.length > 0 && (
                      <div className="mt-4 space-y-2">
                        <p className="font-semibold text-[#191919]">Dokumen:</p>

                        <div className="flex flex-wrap gap-3">
                          {files.map((file, index) => {
                            if (!file) return null;

                            // 🔥 FIX 1: pastikan file itu string
                            const fileName =
                              typeof file === "string"
                                ? file
                                : file?.name || file?.url || "";

                            if (!fileName) return null;

                            // 🔥 FIX 2: tambahin folder "documents/"
                            const filePath = fileName.startsWith("documents/")
                              ? fileName
                              : `documents/${fileName}`;

                            // 🔥 FIX 3: ambil URL
                            const { data } = supabase
                              .storage
                              .from("document-files")
                              .getPublicUrl(filePath);

                            const fileUrl = data?.publicUrl;

                            if (!fileUrl) return null;

                            const isImage = /\.(jpg|jpeg|png|webp)$/i.test(fileName);

                            return isImage ? (
                              <a key={index} href={fileUrl} target="_blank" rel="noreferrer">
                                <img
                                  src={fileUrl}
                                  alt={`file-${index}`}
                                  className="w-32 h-32 object-cover rounded-lg border"
                                />
                              </a>
                            ) : (
                              <a key={index} href={fileUrl} target="_blank" download rel="noreferrer">
                                Download File {index + 1}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    )
                  );
                })()}

              </div>

              {/* QR */}
              <div className="flex flex-col items-center justify-center bg-slate-50 rounded-xl p-6 border">
                <p className="text-xs text-slate-500 mb-3">
                  QR Verifikasi Resmi
                </p>

                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${verifyUrl}`}
                  alt="QR Code"
                  className="rounded-lg"
                />

                <p className="text-[11px] text-slate-400 mt-3 text-center break-all">
                  Scan untuk membuka halaman verifikasi langsung
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
