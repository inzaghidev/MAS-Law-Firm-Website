import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Beranda } from './pages/Beranda';
import { Berita } from './pages/Berita';
import { Portofolio } from './pages/Portofolio';
import { TimPengacara } from './pages/TimPengacara';
import { LayananKami } from './pages/LayananKami';
import { Kontak } from './pages/Kontak';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/tim-pengacara" element={<TimPengacara />} />
          <Route path="/layanan-kami" element={<LayananKami />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
