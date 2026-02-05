import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Beranda } from "./pages/Beranda.jsx";
import { Berita } from "./pages/Berita.jsx";
import { Portofolio } from "./pages/Portofolio.jsx";
import { TimPengacara } from "./pages/TimPengacara.jsx";
import { LayananKami } from "./pages/LayananKami.jsx";
import { Kontak } from "./pages/Kontak.jsx";
import { Admin } from "./pages/Admin.jsx";
import { ManajerOperasional } from "./pages/ManajerOperasional.jsx";
import { StafKaryawan } from "./pages/StafKaryawan.jsx";
import { Sitemap } from "./pages/Sitemap.jsx";
import { ScrollToTop } from "./components/ScrollToTop.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin tanpa Layout */}
        <Route path="/admin" element={<Admin />} />

        {/* Public dengan Layout */}
        <Route element={<Layout />}>
          <Route index element={<Beranda />} />
          <Route path="berita" element={<Berita />} />
          <Route path="portofolio" element={<Portofolio />} />
          <Route path="tim-pengacara" element={<TimPengacara />} />
          <Route path="manajer-operasional" element={<ManajerOperasional />} />
          <Route path="staf-karyawan" element={<StafKaryawan />} />
          <Route path="layanan-kami" element={<LayananKami />} />
          <Route path="kontak" element={<Kontak />} />
          <Route path="sitemap" element={<Sitemap />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
