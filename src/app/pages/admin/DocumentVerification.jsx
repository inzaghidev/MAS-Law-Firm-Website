import React, { useState, useEffect } from 'react';
import { Search, Plus, Edit2, Trash2, X, Upload, Eye, CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { supabase } from '../../../lib/supabase';

export function DocumentVerification() {
  const [documents, setDocuments] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingDoc, setEditingDoc] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    code: '',
    clientName: '',
    type: 'Notarial Deed',
    issueDate: new Date().toISOString().split('T')[0],
    status: 'Valid',
    fileUrl: ''
  });

  // ======================
  // FETCH DATA
  // ======================
  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    const { data, error } = await supabase
      .from('documents')
      .select('*')
      .order('issueDate', { ascending: false });

    if (!error) setDocuments(data || []);
  };

  // ======================
  // INPUT
  // ======================
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // ======================
  // FILE UPLOAD
  // ======================
 const handleFileUpload = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  // Validasi PDF
  if (file.type !== 'application/pdf') {
    alert('File harus PDF');
    return;
  }

  // Maksimal 5MB
  if (file.size > 5 * 1024 * 1024) {
    alert('Ukuran maksimal 5MB');
    return;
  }

  // Nama file unik
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random()
    .toString(36)
    .substring(2)}.${fileExt}`;

  // Upload ke folder 'documents'
  const { error: uploadError } = await supabase.storage
    .from('document-files')
    .upload(`documents/${fileName}`, file, {
      contentType: 'application/pdf',
      upsert: false,
    });

  if (uploadError) {
    console.error(uploadError);
    alert('Upload gagal: ' + uploadError.message);
    return;
  }

  // Ambil public URL
  const { data } = supabase.storage
    .from('document-files')
    .getPublicUrl(`documents/${fileName}`);

  setFormData(prev => ({
    ...prev,
    fileUrl: data.publicUrl,
  }));

  alert('Upload berhasil');
};

  // ======================
  // CREATE / UPDATE
  // ======================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (editingDoc) {
      await supabase
        .from('documents')
        .update(formData)
        .eq('id', editingDoc.id);
    } else {
      await supabase
        .from('documents')
        .insert([formData]);
    }

    setLoading(false);
    setShowForm(false);
    setEditingDoc(null);
    resetForm();
    fetchDocuments();
  };

  // ======================
  // DELETE
  // ======================
  const handleDelete = async (id) => {
    if (!window.confirm('Hapus dokumen ini?')) return;

    await supabase
      .from('documents')
      .delete()
      .eq('id', id);

    fetchDocuments();
  };

  // ======================
  // EDIT
  // ======================
  const handleEdit = (doc) => {
    setFormData(doc);
    setEditingDoc(doc);
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({
      code: '',
      clientName: '',
      type: 'Notarial Deed',
      issueDate: new Date().toISOString().split('T')[0],
      status: 'Valid',
      fileUrl: ''
    });
  };

  // ======================
  // FILTER
  // ======================
  const filteredDocs = documents.filter(doc =>
    doc.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.clientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const docTypes = [
    'Notarial Deed',
    'Legal Opinion',
    'Contract Agreement',
    'Power of Attorney',
    'Court Decision',
    'Memorandum of Understanding'
  ];

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-[#191919]">Document Verification</h2>
          <p className="text-slate-500 text-sm">
            Manage and verify official legal documents.
          </p>
        </div>

        <Button
          onClick={() => setShowForm(true)}
          className="bg-[#AE8737] text-[#191919]"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Document
        </Button>
      </div>

      {/* FORM */}
      {showForm && (
        <Card>
          <CardContent className="p-6 space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                name="code"
                placeholder="DOC-2026-001"
                value={formData.code}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
                required
              />

              <input
                name="clientName"
                placeholder="Client Name"
                value={formData.clientName}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
                required
              />

              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
              >
                {docTypes.map(t => (
                  <option key={t}>{t}</option>
                ))}
              </select>

              <input
                type="date"
                name="issueDate"
                value={formData.issueDate}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
              />

              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
              >
                <option>Valid</option>
                <option>Revoked</option>
              </select>

              {/* Upload */}
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileUpload}
              />

              {formData.fileUrl && (
                <a
                  href={formData.fileUrl}
                  target="_blank"
                  className="text-blue-600 text-sm"
                >
                  Preview File
                </a>
              )}

              <div className="flex gap-3">
                <Button type="submit" disabled={loading}>
                  {loading ? 'Saving...' : 'Save'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* SEARCH */}
      <input
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border p-2 rounded"
      />

      {/* TABLE */}
      <Card>
        <CardContent className="p-6">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th>Code</th>
                <th>Client</th>
                <th>Status</th>
                <th className="text-right">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredDocs.map(doc => (
                <tr key={doc.id} className="border-b">
                  <td>{doc.code}</td>
                  <td>{doc.clientName}</td>
                  <td>
                    {doc.status === 'Valid'
                      ? <CheckCircle className="text-green-500 w-4" />
                      : <XCircle className="text-red-500 w-4" />
                    }
                  </td>
                  <td className="text-right space-x-2">
                    {doc.fileUrl && (
                      <a href={doc.fileUrl} target="_blank">
                        <Eye className="w-4 inline" />
                      </a>
                    )}
                    <button onClick={() => handleEdit(doc)}>
                      <Edit2 className="w-4 inline" />
                    </button>
                    <button onClick={() => handleDelete(doc.id)}>
                      <Trash2 className="w-4 inline text-red-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}