import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Beranda } from "./pages/Beranda";
import { Berita } from "./pages/Berita";
import { Portofolio } from "./pages/Portofolio";
import { TimPengacara } from "./pages/TimPengacara";
import { Asisten } from "./pages/Asisten";
import { StafPerusahaan } from "./pages/StafPerusahaan";
import { LayananKami } from "./pages/LayananKami";
import { Kontak } from "./pages/Kontak";
import { Admin } from "./pages/Admin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Route - No Layout */}
        <Route path="/admin" element={<Admin />} />

        {/* Public Routes - With Layout */}
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Beranda />} />
                <Route path="/berita" element={<Berita />} />
                <Route path="/portofolio" element={<Portofolio />} />
                <Route path="/tim-pengacara" element={<TimPengacara />} />
                <Route path="/asisten" element={<Asisten />} />
                <Route path="/staf-perusahaan" element={<StafPerusahaan />} />
                <Route path="/layanan-kami" element={<LayananKami />} />
                <Route path="/kontak" element={<Kontak />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
