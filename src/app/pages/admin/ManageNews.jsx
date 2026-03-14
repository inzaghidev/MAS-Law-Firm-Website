import { supabase } from '../../../lib/supabase';
import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, X, Search, Filter, Calendar, Image as ImageIcon, Eye, Check, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

export function ManageNews({ articles, setArticles }) {
  const [showForm, setShowForm] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const fetchArticles = async () => {
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error(error);
    return;
  }

  setArticles(data);
};

useEffect(() => {
  fetchArticles();
}, []);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: 'Corporate Law',
    summary: '',
    content: '',
    image: '',
    status: 'Draft',
    featured: false,
    date: new Date().toISOString().split('T')[0]
  });

  // Auto-generate slug from title
  useEffect(() => {
    if (!editingArticle && formData.title) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
      setFormData(prev => ({ ...prev, slug }));
    }
  }, [formData.title, editingArticle]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageChange = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  // Validasi file
  if (!file.type.startsWith('image/')) {
    alert('File must be an image');
    return;
  }

  if (file.size > 2 * 1024 * 1024) {
    alert('Max image size is 2MB');
    return;
  }

  const fileName = `${Date.now()}-${file.name}`;

  // Upload ke Supabase Storage
  const { error } = await supabase.storage
    .from('news-images')
    .upload(fileName, file);

  if (error) {
    console.error(error);
    alert('Upload failed');
    return;
  }

  // Ambil URL public
  const { data } = supabase.storage
    .from('news-images')
    .getPublicUrl(fileName);

  // Simpan URL ke form
  setImagePreview(data.publicUrl);

  setFormData(prev => ({
    ...prev,
    image: data.publicUrl
  }));
};

  const handleSubmit = async (e) => {
  e.preventDefault();

  const finalData = {
    title: formData.title,
    slug: formData.slug,
    category: formData.category,
    summary: formData.summary,
    content: formData.content,
    image_url: formData.image,   // penting: nama kolom di DB
    status: formData.status,
    featured: formData.featured,
    date: formData.date
  };

  if (editingArticle) {
    // UPDATE
    const { error } = await supabase
      .from('news')
      .update(finalData)
      .eq('id', editingArticle.id);

    if (error) {
      console.error(error);
      alert('Update failed');
      return;
    }
  } else {
    // INSERT
    const { error } = await supabase
      .from('news')
      .insert([finalData]);

    if (error) {
      console.error(error);
      alert('Insert failed');
      return;
    }
  }

  alert('Saved to database');
  fetchArticles();   // reload data
  resetForm();
  setShowForm(false);
};

  const handleEdit = (article) => {
    setFormData(article);
    setEditingArticle(article);
    setImagePreview(article.image || '');
    setImageFile(null);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this article?')) return;

    const { error } = await supabase
      .from('news')
      .delete()
      .eq('id', id);

    if (error) {
      console.error(error);
      alert('Failed to delete article');
    } else {
      fetchArticles(); // refresh data
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      category: 'Corporate Law',
      summary: '',
      content: '',
      image: '',
      status: 'Draft',
      featured: false,
      date: new Date().toISOString().split('T')[0]
    });
    setEditingArticle(null);
    setImageFile(null);
    setImagePreview('');
  };

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || article.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const categories = [
    'Corporate Law',
    'Litigation',
    'Intellectual Property',
    'Real Estate',
    'Family Law',
    'Labor Law'
  ];

  if (showForm) {
    return (
      <Card className="border-none shadow-md">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-[#191919]">
              {editingArticle ? 'Edit Article' : 'Add New Article'}
            </h3>
            <button
              onClick={() => { setShowForm(false); resetForm(); }}
              className="text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#191919] mb-1">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AE8737] focus:border-transparent transition-shadow"
                    required
                    placeholder="Enter article title"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#191919] mb-1">Slug</label>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#AE8737] focus:border-transparent transition-shadow"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#191919] mb-1">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AE8737] focus:border-transparent transition-shadow"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#191919] mb-2">Featured Image</label>
                  <div className="flex items-start gap-4">
                    {(imagePreview || formData.image) && (
                      <div className="w-[150px] h-[150px] rounded-lg border border-slate-200 overflow-hidden bg-slate-100 flex-shrink-0">
                        <img 
                          src={imagePreview || formData.image} 
                          alt="Preview" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <label className="inline-flex items-center justify-center px-4 py-2 border border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors bg-white">
                        <ImageIcon className="w-5 h-5 mr-2 text-slate-500" />
                        <span className="text-sm font-medium text-slate-700">Upload Image</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                        />
                      </label>
                      <p className="text-xs text-slate-500 mt-2">
                        Upload a featured image from your device. Supported formats: JPG, PNG, WEBP.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#191919] mb-1">Publish Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AE8737] focus:border-transparent transition-shadow"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#191919] mb-1">Status</label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AE8737] focus:border-transparent transition-shadow"
                    >
                      <option value="Draft">Draft</option>
                      <option value="Published">Published</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-6">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleInputChange}
                    id="featured"
                    className="w-4 h-4 text-[#AE8737] border-slate-300 rounded focus:ring-[#AE8737]"
                  />
                  <label htmlFor="featured" className="text-sm font-medium text-[#191919]">
                    Set as Featured Article
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#191919] mb-1">Summary</label>
              <textarea
                name="summary"
                value={formData.summary}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AE8737] focus:border-transparent transition-shadow"
                placeholder="Brief summary of the article..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#191919] mb-1">Content</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                rows="10"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AE8737] focus:border-transparent transition-shadow font-mono text-sm"
                placeholder="Write your article content here (Markdown supported)..."
                required
              />
            </div>

            <div className="flex gap-3 pt-4 border-t border-slate-100">
              <Button type="submit" className="bg-[#AE8737] hover:bg-[#8f6e2d] text-white px-6">
                {editingArticle ? 'Update Article' : 'Create Article'}
              </Button>
              <Button
                type="button"
                onClick={() => { setShowForm(false); resetForm(); }}
                variant="outline"
                className="border-slate-300 text-slate-600 hover:bg-slate-50"
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#191919]">Manage News</h2>
          <p className="text-slate-500 text-sm">Create and manage news articles and publications.</p>
        </div>
        <Button 
          onClick={() => setShowForm(true)} 
          className="bg-[#AE8737] hover:bg-[#8f6e2d] text-white flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Add New Article
        </Button>
      </div>

      <Card className="border-none shadow-sm">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AE8737] focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              {['All', 'Published', 'Draft'].map(status => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filterStatus === status 
                      ? 'bg-[#AE8737]/10 text-[#AE8737]' 
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100 text-left">
                  <th className="py-4 px-4 font-semibold text-slate-600 text-sm w-20">Image</th>
                  <th className="py-4 px-4 font-semibold text-slate-600 text-sm">Title</th>
                  <th className="py-4 px-4 font-semibold text-slate-600 text-sm">Category</th>
                  <th className="py-4 px-4 font-semibold text-slate-600 text-sm">Date</th>
                  <th className="py-4 px-4 font-semibold text-slate-600 text-sm">Status</th>
                  <th className="py-4 px-4 font-semibold text-slate-600 text-sm text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredArticles.length > 0 ? (
                  filteredArticles.map((article) => (
                    <tr key={article.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                      <td className="py-3 px-4">
                        <div className="w-12 h-12 rounded bg-slate-100 overflow-hidden">
                          {article.image ? (
                            <img src={article.image_url} alt="" className="w-full h-full object-cover" />
                          ) : (
                            <ImageIcon className="w-5 h-5 text-slate-400 m-auto mt-3" />
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-medium text-[#191919] line-clamp-1">{article.title}</div>
                        {article.featured && (
                          <span className="text-xs bg-[#AE8737]/10 text-[#AE8737] px-2 py-0.5 rounded-full mt-1 inline-block">
                            Featured
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-sm text-slate-500">{article.category}</td>
                      <td className="py-3 px-4 text-sm text-slate-500">{article.date}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                          article.status === 'Published' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {article.status === 'Published' ? <Check className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                          {article.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => window.open(`/news/${article.slug}`, '_blank')}
                            className="p-2 hover:bg-blue-50 rounded text-slate-500 hover:text-blue-500 transition-colors"
                            title="Preview"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleEdit(article)}
                            className="p-2 hover:bg-slate-100 rounded text-slate-500 hover:text-[#AE8737] transition-colors"
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(article.id)}
                            className="p-2 hover:bg-red-50 rounded text-slate-500 hover:text-red-500 transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="py-8 text-center text-slate-500">
                      No articles found. Try changing your search or filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
