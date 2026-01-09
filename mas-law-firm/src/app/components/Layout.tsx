import { Link } from "react-router-dom";
import { useState } from "react";
import type { ReactNode } from "react";
import { Footer } from "./Footer";
import logo from "../../assets/mas-law-firm-logo-new-white.png";

export function Layout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className="bg-[#191919] text-white py-5 sticky top-0 z-50 shadow-sm border-b border-[#2a2a2a]">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 mr-20">
            <img src={logo} alt="M.A.S Law Firm" className="h-20" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 text-sm ml-auto">
            <Link to="/" className="hover:text-[#AE8737] transition-colors">
              Home
            </Link>
            <Link
              to="/berita"
              className="hover:text-[#AE8737] transition-colors"
            >
              News
            </Link>
            <Link
              to="/portofolio"
              className="hover:text-[#AE8737] transition-colors"
            >
              Portfolio
            </Link>
            <Link
              to="/tim-pengacara"
              className="hover:text-[#AE8737] transition-colors"
            >
              Lawyer
            </Link>
            <Link
              to="/layanan-kami"
              className="hover:text-[#AE8737] transition-colors"
            >
              Our Services
            </Link>
            <Link
              to="/kontak"
              className="hover:text-[#AE8737] transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Hamburger Button (Mobile) */}
          <button
            onClick={toggleSidebar}
            className="md:hidden text-white p-2 rounded hover:bg-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      {isSidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 z-50 w-64 h-screen bg-gray-800 text-white transform transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5">
          <h2 className="text-xl font-semibold mb-6">M.A.S. Law Firm</h2>

          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                onClick={closeSidebar}
                className="block hover:text-[#AE8737] transition-colors"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/berita"
                onClick={closeSidebar}
                className="block hover:text-[#AE8737] transition-colors"
              >
                Berita
              </Link>
            </li>
            <li>
              <Link
                to="/portofolio"
                onClick={closeSidebar}
                className="block hover:text-[#AE8737] transition-colors"
              >
                Portofolio
              </Link>
            </li>
            <li>
              <Link
                to="/tim-pengacara"
                onClick={closeSidebar}
                className="block hover:text-[#AE8737] transition-colors"
              >
                Tim Pengacara
              </Link>
            </li>
            <li>
              <Link
                to="/layanan-kami"
                onClick={closeSidebar}
                className="block hover:text-[#AE8737] transition-colors"
              >
                Layanan Kami
              </Link>
            </li>
            <li>
              <Link
                to="/kontak"
                onClick={closeSidebar}
                className="block hover:text-[#AE8737] transition-colors"
              >
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-[#f8fafc]-">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
