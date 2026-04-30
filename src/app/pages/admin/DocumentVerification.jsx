import React, { useState, useEffect } from "react";
import {
  Search,
  Plus,
  Edit2,
  Trash2,
  X,
  Upload,
  Eye,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { supabase } from "../../../lib/supabase";

export function DocumentVerification() {
  const [documents, setDocuments] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingDoc, setEditingDoc] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    code: "",
    clientName: "",
    type: "Notarial Deed",
    issueDate: new Date().toISOString().split("T")[0],
    status: "Valid",
    files: [], // ✅ WAJIB
  });

  // ======================
  // FETCH DATA
  // ======================
  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    const { data, error } = await supabase
      .from("documents")
      .select("*")
      .order("issueDate", { ascending: false });

    if (!error) setDocuments(data || []);
  };

  // ======================
  // INPUT
  // ======================
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ======================
  // FILE UPLOAD
  // ======================
  const handleFileUpload = async (e) => {
    const files = Array.from(e.target.files);
    const uploadedUrls = [];

    for (let file of files) {
      // Validasi size
      if (file.size > 5 * 1024 * 1024) {
        alert(`${file.name} terlalu besar`);
        continue;
      }

      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2)}.${fileExt}`;

      const { error } = await supabase.storage
        .from("document-files")
        .upload(`documents/${fileName}`, file, {
          contentType: file.type,
        });

      if (error) {
        console.error(error);
        alert(`Gagal upload: ${file.name}`);
        continue;
      }

      const { data } = supabase.storage
        .from("document-files")
        .getPublicUrl(`documents/${fileName}`);

      uploadedUrls.push(data.publicUrl);
    }

    // 🔥 INI YANG PALING PENTING
    setFormData((prev) => ({
      ...prev,
      files: [...(prev.files || []), ...uploadedUrls],
    }));

    console.log("TOTAL FILE KE-SAVE:", uploadedUrls.length);
  };

  // ======================
  // CREATE / UPDATE
  // ======================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let finalData = { ...formData };

    if (!editingDoc) {
      const newCode = await generateCode(); // 🔥 WAJIB await
      finalData.code = newCode;
    }

    if (editingDoc) {
      await supabase
        .from("documents")
        .update(finalData)
        .eq("id", editingDoc.id);
    } else {
      await supabase.from("documents").insert([finalData]);
    }

    setLoading(false);
    setShowForm(false);
    resetForm();
    fetchDocuments();
  };

  const generateCode = async () => {
    const year = new Date().getFullYear();

    const { data } = await supabase.from("documents").select("id");

    const count = data?.length || 0;
    const number = String(count + 1).padStart(3, "0");

    return `MAS-${year}-${number}`;
  };

  // ======================
  // DELETE
  // ======================
  const handleDelete = async (id) => {
    if (!window.confirm("Hapus dokumen ini?")) return;

    await supabase.from("documents").delete().eq("id", id);

    fetchDocuments();
  };

  // ======================
  // RESET FORM
  // ======================
  const resetForm = () => {
    setFormData({
      code: "",
      clientName: "",
      type: "Notarial Deed",
      issueDate: new Date().toISOString().split("T")[0],
      status: "Valid",
      files: [], // ✅ kosongin
    });
  };

  // ======================
  // EDIT
  // ======================
  const handleEdit = (doc) => {
    setEditingDoc(doc);
    setFormData({
      code: doc.code,
      clientName: doc.clientName,
      type: doc.type,
      issueDate: doc.issueDate,
      status: doc.status,
      files: doc.files || [],
    });
    setShowForm(true);
  };

  // ======================
  // FILTER
  // ======================
  const filteredDocs = documents.filter(
    (doc) =>
      doc.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.clientName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-[#191919]">
            Document Verification
          </h2>
          <p className="text-slate-500 text-sm">
            Manage and verify official legal documents.
          </p>
        </div>

        <Button
          onClick={async () => {
            const code = await generateCode();

            setFormData((prev) => ({
              ...prev,
              code,
            }));

            setShowForm(true);
          }}
          className="bg-[#AE8737] text-[#191919]"
        >
          <Plus className="w-4 mr-2" />
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
                value={formData.code}
                readOnly
                className="w-full border p-2 rounded bg-gray-100 cursor-not-allowed"
              />

              <input
                name="clientName"
                placeholder="Client Name"
                value={formData.clientName}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
                required
              />

              <input
                type="date"
                name="issueDate"
                value={formData.issueDate}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
              />

              {/* Upload */}
              <input
                type="file"
                multiple
                onChange={handleFileUpload}
                className="w-full border p-2 rounded"
              />

              <div className="flex flex-wrap gap-2">
                {formData.files?.map((file, i) => {
                  // Extract filename from the URL or path
                  const fileName = file.split("/").pop() || file;

                  return (
                    <a
                      key={i}
                      href={file}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-blue-600 text-sm border border-gray-300 rounded-md px-2 py-1 hover:bg-gray-50 transition-colors"
                    >
                      {fileName}
                    </a>
                  );
                })}
              </div>

              <div className="flex gap-3">
                <Button type="submit" disabled={loading}>
                  {loading ? "Saving..." : "Save"}
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
              <tr>
                <th className="text-left p-2">Code</th>
                <th className="text-left p-2">Client</th>
                <th className="text-left p-2">Files</th>
                <th className="text-left p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDocs.map((doc) => (
                <tr key={doc.id}>
                  <td>{doc.code}</td>
                  <td>{doc.clientName}</td>
                  <td>
                    {doc.status === "Valid" ? (
                      <CheckCircle className="text-green-500 w-4" />
                    ) : (
                      <XCircle className="text-red-500 w-4" />
                    )}
                  </td>

                  <td>
                    {doc.files?.map((file, i) => {
                      const fileName = file.split("/").pop() || file;
                      return (
                        <a
                          key={i}
                          href={file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 text-sm border border-gray-300 rounded-md px-2 py-1 hover:bg-gray-50 transition-colors"
                        >
                          <Eye className="w-4 inline mr-1" />
                          {fileName}
                        </a>
                      );
                    })}
                  </td>

                  <td>
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
