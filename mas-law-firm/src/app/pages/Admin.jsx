import { useState } from 'react';
import { 
  Newspaper, 
  Users, 
  Settings, 
  Plus, 
  Edit2, 
  Trash2,
  X
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

export function Admin() {
  const [activeTab, setActiveTab] = useState('news');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingNews, setEditingNews] = useState(null);
  
  const [newsArticles, setNewsArticles] = useState([
    {
      id: 1,
      title: "Regulasi Hukum Korporasi Terbaru: Yang Perlu Diketahui Bisnis Anda",
      date: "2 Januari 2026",
      summary: "Pembaruan terkini dalam regulasi hukum korporasi yang dapat mempengaruhi operasional bisnis Anda.",
      image: "https://images.unsplash.com/photo-1752697589128-f8e110a86af3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBib29rcyUyMGxlZ2FsfGVufDF8fHx8MTc2NzYwOTI1MXww&ixlib=rb-4.1.0&q=80&w=1080",
      status: "Published"
    },
    {
      id: 2,
      title: "Perlindungan Merek di Era Digital: Panduan Esensial",
      date: "28 Desember 2025",
      summary: "Memahami pentingnya melindungi merek Anda di pasar yang semakin digital.",
      image: "https://images.unsplash.com/photo-1763729805496-b5dbf7f00c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnRyYWN0JTIwbGVnYWx8ZW58MXx8fHwxNzY3NjA5MjUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      status: "Published"
    },
    {
      id: 3,
      title: "Pembaruan Hukum Pajak 2026 untuk Perseroan Terbatas",
      date: "20 Desember 2025",
      summary: "Tetap terinformasi tentang perubahan hukum pajak terbaru yang mempengaruhi PT.",
      image: "https://images.unsplash.com/photo-1756633231294-f72b004e8c5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VydGhvdXNlJTIwanVzdGljZXxlbnwxfHx8fDE3Njc1MDgwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      status: "Draft"
    }
  ]);

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    summary: '',
    image: '',
    status: 'Draft'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingNews) {
      setNewsArticles(prev => prev.map(article => 
        article.id === editingNews.id 
          ? { ...formData, id: editingNews.id }
          : article
      ));
      setEditingNews(null);
    } else {
      const newArticle = {
        ...formData,
        id: newsArticles.length + 1
      };
      setNewsArticles(prev => [...prev, newArticle]);
    }
    
    setFormData({
      title: '',
      date: '',
      summary: '',
      image: '',
      status: 'Draft'
    });
    setShowAddForm(false);
  };

  const handleEdit = (article) => {
    setFormData(article);
    setEditingNews(article);
    setShowAddForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      setNewsArticles(prev => prev.filter(article => article.id !== id));
    }
  };

  const handleCancel = () => {
    setShowAddForm(false);
    setEditingNews(null);
    setFormData({
      title: '',
      date: '',
      summary: '',
      image: '',
      status: 'Draft'
    });
  };

  const sidebarItems = [
    { id: 'news', icon: Newspaper, label: 'Manage News' },
    { id: 'lawyers', icon: Users, label: 'Manage Lawyers' },
    { id: 'settings', icon: Settings, label: 'Site Settings' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#191919] text-white min-h-screen sticky top-0">
        <div className="p-6 border-b border-[#2a2a2a]">
          <h1 className="text-2xl font-bold text-[#AE8737]">Admin Dashboard</h1>
          <p className="text-sm text-slate-400 mt-1">M.A.S. Law Firm</p>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? 'bg-[#AE8737] text-white'
                        : 'text-slate-300 hover:bg-[#2a2a2a] hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#191919] mb-2">
                {activeTab === 'news' && 'Manage News'}
                {activeTab === 'lawyers' && 'Manage Lawyers'}
                {activeTab === 'settings' && 'Site Settings'}
              </h2>
              <p className="text-slate-600">
                {activeTab === 'news' && 'Create, edit, and manage news articles'}
                {activeTab === 'lawyers' && 'Manage your team of lawyers'}
                {activeTab === 'settings' && 'Configure site settings and preferences'}
              </p>
            </div>
            
            {activeTab === 'news' && !showAddForm && (
              <Button
                onClick={() => setShowAddForm(true)}
                className="bg-[#AE8737] hover:bg-[#8f6e2d] text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add New Article
              </Button>
            )}
          </div>

          {/* News Management Tab */}
          {activeTab === 'news' && (
            <>
              {/* Add/Edit Form */}
              {showAddForm && (
                <Card className="mb-8 border-[#AE8737]/30">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-bold text-[#191919]">
                        {editingNews ? 'Edit Article' : 'Add New Article'}
                      </h3>
                      <button
                        onClick={handleCancel}
                        className="text-slate-400 hover:text-slate-600"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-[#191919] mb-2">
                            Article Title
                          </label>
                          <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AE8737] focus:border-transparent"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-[#191919] mb-2">
                            Date
                          </label>
                          <input
                            type="text"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            placeholder="e.g., 2 Januari 2026"
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AE8737] focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-[#191919] mb-2">
                          Summary
                        </label>
                        <textarea
                          name="summary"
                          value={formData.summary}
                          onChange={handleInputChange}
                          rows="4"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AE8737] focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-[#191919] mb-2">
                            Image URL
                          </label>
                          <input
                            type="url"
                            name="image"
                            value={formData.image}
                            onChange={handleInputChange}
                            placeholder="https://..."
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AE8737] focus:border-transparent"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-[#191919] mb-2">
                            Status
                          </label>
                          <select
                            name="status"
                            value={formData.status}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AE8737] focus:border-transparent"
                          >
                            <option value="Draft">Draft</option>
                            <option value="Published">Published</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Button
                          type="submit"
                          className="bg-[#AE8737] hover:bg-[#8f6e2d] text-white"
                        >
                          {editingNews ? 'Update Article' : 'Create Article'}
                        </Button>
                        <Button
                          type="button"
                          onClick={handleCancel}
                          variant="outline"
                          className="border-slate-300"
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}

              {/* News Articles Table */}
              <Card>
                <CardContent className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="text-left py-4 px-4 font-semibold text-[#191919]">Title</th>
                          <th className="text-left py-4 px-4 font-semibold text-[#191919]">Date</th>
                          <th className="text-left py-4 px-4 font-semibold text-[#191919]">Status</th>
                          <th className="text-right py-4 px-4 font-semibold text-[#191919]">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {newsArticles.map((article) => (
                          <tr key={article.id} className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="py-4 px-4">
                              <div className="flex items-start gap-3">
                                <img 
                                  src={article.image} 
                                  alt={article.title}
                                  className="w-16 h-16 object-cover rounded"
                                />
                                <div>
                                  <div className="font-medium text-[#191919] mb-1">{article.title}</div>
                                  <div className="text-sm text-slate-500 line-clamp-1">{article.summary}</div>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-4 text-slate-600">{article.date}</td>
                            <td className="py-4 px-4">
                              <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                                article.status === 'Published' 
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {article.status}
                              </span>
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex gap-2 justify-end">
                                <button
                                  onClick={() => handleEdit(article)}
                                  className="p-2 text-[#AE8737] hover:bg-[#AE8737]/10 rounded transition-colors"
                                  title="Edit"
                                >
                                  <Edit2 className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleDelete(article.id)}
                                  className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                                  title="Delete"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {/* Lawyers Management Tab */}
          {activeTab === 'lawyers' && (
            <Card>
              <CardContent className="p-12 text-center">
                <Users className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#191919] mb-2">Lawyer Management</h3>
                <p className="text-slate-600">This section is under development. You will be able to add and manage lawyers here.</p>
              </CardContent>
            </Card>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <Card>
              <CardContent className="p-12 text-center">
                <Settings className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#191919] mb-2">Site Settings</h3>
                <p className="text-slate-600">This section is under development. You will be able to configure site settings here.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
