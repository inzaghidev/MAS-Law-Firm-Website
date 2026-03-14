import React, { useState, useEffect } from 'react';
import { Save, Globe, Mail, Phone, MapPin, Upload, Image } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { supabase } from '../../../lib/supabase';

export function SiteSettings() {
  const [loading, setLoading] = useState(false);

  const [settings, setSettings] = useState({
    site_name: '',
    contact_email: '',
    contact_phone: '',
    address: '',
    logo_url: ''
  });

  // ======================
  // LOAD SETTINGS
  // ======================
  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    const { data, error } = await supabase
      .from('site_settings')
      .select('*')
      .eq('id', 1)
      .single();

    if (!error && data) {
      setSettings(data);
    }
  };

  // ======================
  // INPUT CHANGE
  // ======================
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  // ======================
  // LOGO UPLOAD
  // ======================
  const handleLogoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validasi
    if (!file.type.startsWith('image/')) {
      alert('File harus gambar');
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert('Maksimal 2MB');
      return;
    }

    const fileName = `logo-${Date.now()}.${file.name.split('.').pop()}`;

    const { error } = await supabase.storage
      .from('site-assets')
      .upload(fileName, file, {
        upsert: true
      });

    if (error) {
      alert('Upload logo gagal');
      return;
    }

    const { data } = supabase.storage
      .from('site-assets')
      .getPublicUrl(fileName);

    setSettings(prev => ({
      ...prev,
      logo_url: data.publicUrl
    }));
  };

  // ======================
  // SAVE SETTINGS
  // ======================
  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from('site_settings')
      .update(settings)
      .eq('id', 1);

    setLoading(false);

    if (error) {
      alert('Failed to save settings');
    } else {
      alert('Settings saved!');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[#191919]">Site Settings</h2>
        <p className="text-slate-500 text-sm">
          Manage website identity and contact information.
        </p>
      </div>

      <Card className="max-w-2xl">
        <CardContent className="p-6">
          <form onSubmit={handleSave} className="space-y-6">

            {/* SITE NAME */}
            <div>
              <label className="text-sm font-medium">Site Name</label>
              <input
                name="site_name"
                value={settings.site_name || ''}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>

            {/* CONTACT */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="contact_email"
                placeholder="Email"
                value={settings.contact_email || ''}
                onChange={handleChange}
                className="border p-2 rounded"
              />

              <input
                name="contact_phone"
                placeholder="Phone"
                value={settings.contact_phone || ''}
                onChange={handleChange}
                className="border p-2 rounded"
              />
            </div>

            <textarea
              name="address"
              placeholder="Address"
              value={settings.address || ''}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />

            {/* LOGO */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Image className="w-4 h-4" />
                Logo Website
              </label>

              {settings.logo_url && (
                <img
                  src={settings.logo_url}
                  alt="Logo"
                  className="h-16 object-contain mb-2"
                />
              )}

              <input
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
              />
            </div>

            {/* SAVE */}
            <Button type="submit" disabled={loading}>
              {loading ? 'Saving...' : 'Save Changes'}
            </Button>

          </form>
        </CardContent>
      </Card>
    </div>
  );
}