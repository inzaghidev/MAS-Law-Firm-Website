import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Newspaper,
  ShieldCheck,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { supabase } from "../../lib/supabase";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

// Import sub-components
import { DashboardOverview } from "./admin/DashboardOverview";
import { ManageNews } from "./admin/ManageNews";
import { DocumentVerification } from "./admin/DocumentVerification";
import { SiteSettings } from "./admin/SiteSettings";

export function Admin() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // ===============================
  // STATE DATA
  // ===============================
  const [newsArticles, setNewsArticles] = useState([]);
  const [documents, setDocuments] = useState([]);

  // ===============================
  // FETCH DATA FROM SUPABASE
  // ===============================
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);

    try {
      // Fetch News
      const { data: newsData, error: newsError } = await supabase
        .from("news")
        .select("*")
        .order("date", { ascending: false });

      if (newsError) throw newsError;

      // Fetch Documents
      const { data: docData, error: docError } = await supabase
        .from("documents")
        .select("*")
        .order("issueDate", { ascending: false });

      if (docError) throw docError;

      setNewsArticles(newsData || []);
      setDocuments(docData || []);
    } catch (error) {
      console.error(error);

      // Fallback biar dashboard tidak blank
      setNewsArticles([]);
      setDocuments([]);

      toast.error("Failed to load data");
    }

    setLoading(false);
  };

  // ===============================
  // SIGN OUT
  // ===============================
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      navigate("/login");
      toast.success("Logged out");
    }
  };

  // ===============================
  // SIDEBAR MENU
  // ===============================
  const sidebarItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { id: "news", icon: Newspaper, label: "Manage News" },
    { id: "verification", icon: ShieldCheck, label: "Document Verification" },
    { id: "settings", icon: Settings, label: "Site Settings" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Toggle */}
      <button
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-[#191919] text-white rounded-md"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X /> : <Menu />}
      </button>

      {/* ===============================
          SIDEBAR
      =============================== */}
      <aside
        className={`
        fixed lg:sticky top-0 left-0 h-screen w-64 bg-[#191919] text-white flex flex-col justify-between
        transform transition-transform duration-300 z-40
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div>
          <div className="p-6 border-b border-[#2a2a2a]">
            <h1 className="text-lg font-bold text-[#AE8737]">ADMIN PANEL</h1>
            <p className="text-xs text-slate-400">M.A.S. Law Firm</p>
          </div>

          <nav className="p-4">
            <ul className="space-y-2">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        setActiveTab(item.id);
                        setSidebarOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                        activeTab === item.id
                          ? "bg-[#AE8737]"
                          : "hover:bg-[#2a2a2a]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="p-4 border-t border-[#2a2a2a]">
          <button
            onClick={handleSignOut}
            className="w-full flex items-center justify-center gap-2 py-2 rounded bg-red-500/10 hover:bg-red-500/20"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* ===============================
          MAIN CONTENT
      =============================== */}
      <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
        {loading && (
          <div className="text-center py-20 text-slate-500">
            Loading data...
          </div>
        )}

        {!loading && (
          <>
            {activeTab === "dashboard" && (
              <DashboardOverview
                articles={newsArticles}
                documents={documents}
              />
            )}

            {activeTab === "news" && (
              <ManageNews
                articles={newsArticles}
                setArticles={setNewsArticles}
              />
            )}

            {activeTab === "verification" && (
              <DocumentVerification
                documents={documents}
                setDocuments={setDocuments}
              />
            )}

            {activeTab === "settings" && <SiteSettings />}
          </>
        )}
      </main>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
