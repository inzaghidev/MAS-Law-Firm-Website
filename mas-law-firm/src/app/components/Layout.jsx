import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Footer } from "./Footer";
import whatsappLogo from "../../assets/whatsapp-logo-button-gold.png";
import { ChevronDown } from "lucide-react";
import logo from "../../assets/mas-law-firm-logo-new-white.png";

export function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);
  const [isMobileTeamOpen, setIsMobileTeamOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleDropdownEnter = () => {
    // Clear any existing timeout
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsTeamDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    // Add a delay before closing
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsTeamDropdownOpen(false);
    }, 200);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className="bg-[#191919] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 text-white py-5 sticky top-0 z-50 shadow-sm border-b border-[#2a2a2a]">
        <div className="container mx-auto px-10 flex justify-between items-center">
          <div className="flex items-center gap-3 mr-20 flex-shrink-0">
            <img src={logo} alt="M.A.S Law Firm" className="h-17" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 lg:gap-8 text-sm ml-auto items-center font-medium">
            <Link
              to="/"
              className="hover:text-[#AE8737] transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/berita"
              className="hover:text-[#AE8737] transition-colors duration-300"
            >
              News
            </Link>
            <Link
              to="/portofolio"
              className="hover:text-[#AE8737] transition-colors duration-300"
            >
              Portfolio
            </Link>

            {/* Our Team Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="hover:text-[#AE8737] transition-colors duration-300 flex items-center gap-1 text-sm">
                Our Team
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isTeamDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu with invisible bridge */}
              {isTeamDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  {/* Invisible bridge to prevent gap */}
                  <div className="h-2 w-full"></div>
                  <div className="w-48 bg-[#2a2a2a] rounded-md shadow-xl overflow-hidden border border-[#3a3a3a]">
                    <Link
                      to="/tim-pengacara"
                      className="block px-4 py-3 hover:bg-[#AE8737] hover:text-white transition-colors duration-200"
                    >
                      Lawyer
                    </Link>
                    <Link
                      to="/asisten"
                      className="block px-4 py-3 hover:bg-[#AE8737] hover:text-white transition-colors duration-200"
                    >
                      Assistant
                    </Link>
                    <Link
                      to="/staf-perusahaan"
                      className="block px-4 py-3 hover:bg-[#AE8737] hover:text-white transition-colors duration-200"
                    >
                      Company Staff
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/layanan-kami"
              className="hover:text-[#AE8737] transition-colors duration-300 whitespace-nowrap"
            >
              Our Services
            </Link>
            <Link
              to="/kontak"
              className="hover:text-[#AE8737] transition-colors duration-300"
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

            {/* Mobile Team Dropdown */}
            <li>
              <button
                onClick={() => setIsMobileTeamOpen(!isMobileTeamOpen)}
                className="w-full text-left hover:text-[#AE8737] transition-colors duration-300 flex items-center justify-between"
              >
                Tim Kami
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMobileTeamOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isMobileTeamOpen && (
                <ul className="mt-2 ml-4 space-y-2 border-l-2 border-[#AE8737] pl-4">
                  <li>
                    <Link
                      to="/tim-pengacara"
                      onClick={closeSidebar}
                      className="block hover:text-[#AE8737] transition-colors text-sm"
                    >
                      Pengacara
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/asisten"
                      onClick={closeSidebar}
                      className="block hover:text-[#AE8737] transition-colors text-sm"
                    >
                      Asisten
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/staf-perusahaan"
                      onClick={closeSidebar}
                      className="block hover:text-[#AE8737] transition-colors text-sm"
                    >
                      Staf Perusahaan
                    </Link>
                  </li>
                </ul>
              )}
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

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50"
        aria-label="WhatsApp"
      >
        <img src={whatsappLogo} alt="WhatsApp" className="w-14 h-14" />
      </a>
    </div>
  );
}
