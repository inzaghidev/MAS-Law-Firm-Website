import { Link, useLocation, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { Footer } from "./Footer";
import logo from "/logo.png";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { supabase } from "../../lib/supabase";

import { FloatingWhatsApp } from "./FloatingWhatsApp";

export function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] =
    useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Helper to check if a path is active
  const isActive = (path: string) => location.pathname === path;

  // Helper to check if any team path is active for parent styling
  const isTeamActive =
    location.pathname === "/tim-pengacara" ||
    location.pathname === "/manajer-operasional" ||
    location.pathname === "/staf-karyawan";

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className="bg-[#191919] text-white py-5 sticky top-0 z-50 shadow-sm border-b border-[#2a2a2a]">
        <div className="container mx-auto px-10 flex justify-between items-center">
          <div className="flex items-center gap-3 mr-20 flex-shrink-0">
            <Link to="/">
              <img
                src={logo}
                alt="M.A.S Law Firm"
                className="h-12"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm ml-auto items-center font-medium">
            <Link
              to="/"
              className={`hover:text-[#AE8737] transition-colors duration-300 ${isActive("/") ? "text-[#AE8737]" : ""}`}
            >
              Beranda
            </Link>

            <Link
              to="/berita"
              className={`hover:text-[#AE8737] transition-colors duration-300 ${isActive("/berita") ? "text-[#AE8737]" : ""}`}
            >
              Berita
            </Link>

            <Link
              to="/portofolio"
              className={`hover:text-[#AE8737] transition-colors duration-300 ${isActive("/portofolio") ? "text-[#AE8737]" : ""}`}
            >
              Portofolio
            </Link>

            {/* Our Team Dropdown */}
            <div
              className="relative group h-full flex items-center"
              onMouseEnter={() => setIsTeamDropdownOpen(true)}
              onMouseLeave={() => setIsTeamDropdownOpen(false)}
            >
              <button
                className={`hover:text-[#AE8737] transition-colors duration-300 flex items-center gap-1 text-sm ${isTeamActive ? "text-[#AE8737]" : ""}`}
              >
                Tim Kami
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isTeamDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {isTeamDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-[#191919] border border-[#AE8737]/30 shadow-lg rounded-md overflow-hidden py-2"
                    style={{ translateX: "-10%" }}
                  >
                    <Link
                      to="/tim-pengacara"
                      className={`block px-4 py-2 hover:bg-[#AE8737]/10 hover:text-[#AE8737] transition-colors ${isActive("/tim-pengacara") ? "text-[#AE8737] bg-[#AE8737]/5" : ""}`}
                    >
                      Tim Pengacara
                    </Link>
                    <Link
                      to="/manajer-operasional"
                      className={`block px-4 py-2 hover:bg-[#AE8737]/10 hover:text-[#AE8737] transition-colors ${isActive("/manajer-operasional") ? "text-[#AE8737] bg-[#AE8737]/5" : ""}`}
                    >
                      Manajer Operasional
                    </Link>
                    <Link
                      to="/staf-karyawan"
                      className={`block px-4 py-2 hover:bg-[#AE8737]/10 hover:text-[#AE8737] transition-colors ${isActive("/staf-karyawan") ? "text-[#AE8737] bg-[#AE8737]/5" : ""}`}
                    >
                      Staf Karyawan
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/layanan-kami"
              className={`hover:text-[#AE8737] transition-colors duration-300 whitespace-nowrap ${isActive("/layanan-kami") ? "text-[#AE8737]" : ""}`}
            >
              Layanan Kami
            </Link>

            <Link
              to="/kontak"
              className={`hover:text-[#AE8737] transition-colors duration-300 ${isActive("/kontak") ? "text-[#AE8737]" : ""}`}
            >
              Kontak
            </Link>

            {isAuthenticated && (
              <Link
                to="/admin"
                className="text-[#AE8737] border border-[#AE8737] px-4 py-1.5 rounded hover:bg-[#AE8737] hover:text-white transition-all duration-300"
              >
                Dashboard
              </Link>
            )}
          </div>

          {/* Hamburger Button (Mobile) */}
          <button
            onClick={toggleSidebar}
            className="md:hidden text-white p-2 rounded hover:bg-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isSidebarOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
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
        className={`fixed top-0 left-0 z-50 w-64 h-screen bg-[#191919] text-white border-r border-[#2a2a2a] transform transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-[#AE8737]">
              M.A.S. Law Firm
            </h2>
            <button
              onClick={closeSidebar}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                onClick={closeSidebar}
                className={`block hover:text-[#AE8737] transition-colors ${isActive("/") ? "text-[#AE8737]" : ""}`}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/berita"
                onClick={closeSidebar}
                className={`block hover:text-[#AE8737] transition-colors ${isActive("/berita") ? "text-[#AE8737]" : ""}`}
              >
                Berita
              </Link>
            </li>
            <li>
              <Link
                to="/portofolio"
                onClick={closeSidebar}
                className={`block hover:text-[#AE8737] transition-colors ${isActive("/portofolio") ? "text-[#AE8737]" : ""}`}
              >
                Portofolio
              </Link>
            </li>

            {/* Mobile Dropdown Group */}
            <li className="pt-2 pb-1 border-t border-[#2a2a2a]">
              <span className="block text-[#AE8737] text-xs uppercase mb-2 font-semibold tracking-wider">
                Tim Kami
              </span>
              <ul className="pl-4 space-y-3 border-l border-[#2a2a2a] ml-1">
                <li>
                  <Link
                    to="/tim-pengacara"
                    onClick={closeSidebar}
                    className={`block hover:text-[#AE8737] transition-colors ${isActive("/tim-pengacara") ? "text-[#AE8737]" : ""}`}
                  >
                    Tim Pengacara
                  </Link>
                </li>
                <li>
                  <Link
                    to="/manajer-operasional"
                    onClick={closeSidebar}
                    className={`block hover:text-[#AE8737] transition-colors ${isActive("/manajer-operasional") ? "text-[#AE8737]" : ""}`}
                  >
                    Manajer Operasional
                  </Link>
                </li>
                <li>
                  <Link
                    to="/staf-karyawan"
                    onClick={closeSidebar}
                    className={`block hover:text-[#AE8737] transition-colors ${isActive("/staf-karyawan") ? "text-[#AE8737]" : ""}`}
                  >
                    Staf Karyawan
                  </Link>
                </li>
              </ul>
            </li>

            <li className="pt-2 border-t border-[#2a2a2a]">
              <Link
                to="/layanan-kami"
                onClick={closeSidebar}
                className={`block hover:text-[#AE8737] transition-colors ${isActive("/layanan-kami") ? "text-[#AE8737]" : ""}`}
              >
                Layanan Kami
              </Link>
            </li>
            <li>
              <Link
                to="/kontak"
                onClick={closeSidebar}
                className={`block hover:text-[#AE8737] transition-colors ${isActive("/kontak") ? "text-[#AE8737]" : ""}`}
              >
                Kontak
              </Link>
            </li>
            
            {isAuthenticated && (
              <li className="pt-2 border-t border-[#2a2a2a] mt-2">
                <Link
                  to="/admin"
                  onClick={closeSidebar}
                  className="block text-[#AE8737] font-semibold"
                >
                  Admin Dashboard
                </Link>
              </li>
            )}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-[#f8fafc]"><Outlet /></main>

      {/* Footer */}
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
