import { useEffect, useState } from "react";
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

// IMPORT COMPONENT
import { DashboardOverview } from "./admin/DashboardOverview";
import { ManageNews } from "./admin/ManageNews";
import { DocumentVerification } from "./admin/DocumentVerification";
import { SiteSettings } from "./admin/SiteSettings";

export function Admin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // ===============================
  // ADMIN THEME
  // ===============================
  useEffect(() => {
    document.body.classList.add("admin-theme");
    return () => document.body.classList.remove("admin-theme");
  }, []);

  // ===============================
  // STATE DATA
  // ===============================
  const [newsArticles, setNewsArticles] = useState([]);
  const [documents, setDocuments] = useState([]);

  // ===============================
  // FETCH DATA
  // ===============================
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);

    try {
      const { data: newsData } = await supabase
        .from("news")
        .select("*")
        .order("date", { ascending: false });

      const { data: docData } = await supabase
        .from("documents")
        .select("*")
        .order("issue_date", { ascending: false });

      setNewsArticles(newsData || []);
      setDocuments(docData || []);
    } catch (err) {
      console.error(err);
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
    <div className="min-h-screen flex bg-gray-50">

      {/* MOBILE BUTTON */}
      <button
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-gray-300 rounded-md"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X /> : <Menu />}
      </button>

      {/* SIDEBAR */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-64 bg-gray-100 flex flex-col justify-between
        transform transition-transform duration-300 z-40
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div>
          <div className="p-6 border-b bg-gray-300">
            <h1 className="font-bold text-[#AE8737]">ADMIN PANEL</h1>
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
                          ? "bg-[#AE8737] text-white"
                          : "hover:bg-gray-300"
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

        <div className="p-4 border-t">
          <button
            onClick={handleSignOut}
            className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-red-400/50 hover:bg-red-400"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-4 lg:p-8">

        {loading && (
          <div className="text-center py-20">Loading...</div>
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
          className="fixed inset-0 bg-black/50"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
