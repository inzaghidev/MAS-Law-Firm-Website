import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import { Layout } from "./app/components/Layout";
import { Beranda } from "./app/pages/Beranda";
import { LayananKami } from "./app/pages/LayananKami";
import { Berita } from "./app/pages/Berita";
import { Kontak } from "./app/pages/Kontak";
import { Portofolio } from "./app/pages/Portofolio";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/tim-pengacara" element={<TimPengacara />} />
        <Route path="/manajer-operasional" element={<ManajerOperasional />} />
        <Route path="/staf-karyawan" element={<StafKaryawan />} />
        <Route path="/layanan-kami" element={<LayananKami />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/sitemap" element={<Sitemap />} />
      </Routes>
    </Layout>
  );
}

const rootEl = document.getElementById("root");
if (rootEl) {
  createRoot(rootEl).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  );
}
