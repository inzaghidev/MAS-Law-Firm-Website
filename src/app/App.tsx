import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout.tsx";
import { Beranda } from "./pages/Beranda.jsx";
import { Berita } from "./pages/Berita.jsx";
import { NewsDetail } from "./pages/NewsDetail.jsx";
import { Portofolio } from "./pages/Portofolio.jsx";
import { TimPengacara } from "./pages/TimPengacara.jsx";
import { LayananKami } from "./pages/LayananKami.jsx";
import { Kontak } from "./pages/Kontak.jsx";
import { Admin } from "./pages/Admin.jsx";
import { ManajerOperasional } from "./pages/ManajerOperasional.jsx";
import { StafKaryawan } from "./pages/StafKaryawan.jsx";
import { VerifyDocument } from "./pages/VerifyDocument.jsx";
import { Sitemap } from "./pages/Sitemap.jsx";
import { ScrollToTop } from "./components/ScrollToTop.jsx";

import { Login } from "./pages/Login.tsx";
import { ProtectedRoute } from "./components/ProtectedRoute.tsx";

// ADMIN SUB PAGES
import { DashboardOverview } from "./pages/admin/DashboardOverview.jsx";
import { ManageNews } from "./pages/admin/ManageNews.jsx";
import { DocumentVerification } from "./pages/admin/DocumentVerification.jsx";
import { SiteSettings } from "./pages/admin/SiteSettings.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>

        {/* ================= LOGIN ================= */}
        <Route path="/login" element={<Login />} />

        {/* ================= ADMIN ================= */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        >
          {/* default dashboard */}
          <Route index element={<DashboardOverview />} />

          {/* sub pages */}
          <Route path="news" element={<ManageNews />} />
          <Route path="document-verification" element={<DocumentVerification />} />
          <Route path="settings" element={<SiteSettings />} />
        </Route>

        {/* ================= PUBLIC ================= */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Beranda />} />
          <Route path="berita" element={<Berita />} />
          <Route path="news/:slug" element={<NewsDetail />} />
          <Route path="portofolio" element={<Portofolio />} />
          <Route path="tim-pengacara" element={<TimPengacara />} />
          <Route path="manajer-operasional" element={<ManajerOperasional />} />
          <Route path="staf-karyawan" element={<StafKaryawan />} />
          <Route path="layanan-kami" element={<LayananKami />} />
          <Route path="kontak" element={<Kontak />} />
          <Route path="sitemap" element={<Sitemap />} />
          <Route path="verify" element={<VerifyDocument />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}