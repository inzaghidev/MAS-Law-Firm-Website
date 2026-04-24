import React, { useState, useEffect } from 'react';
import { Save, Globe, Mail, Phone, MapPin, Image } from 'lucide-react';
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
    logo_url: '',
    meta_title: '',
    meta_description: ''
  });

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    const { data } = await supabase
      .from('site_settings')
      .select('*')
      .eq('id', 1)
      .single();

    if (data) setSettings(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  const handleLogoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileName = `logo-${Date.now()}.${file.name.split('.').pop()}`;

    await supabase.storage
      .from('site-assets')
      .upload(fileName, file, { upsert: true });

    const { data } = supabase.storage
      .from('site-assets')
      .getPublicUrl(fileName);

    setSettings(prev => ({
      ...prev,
      logo_url: data.publicUrl
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);

    await supabase
      .from('site_settings')
      .update(settings)
      .eq('id', 1);

    setLoading(false);
    alert('Settings saved!');
  };

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-bold text-[#191919]">Site Settings</h2>
        <p className="text-slate-500 text-sm">
          Manage website identity, branding, and SEO.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">

        {/* LEFT FORM */}
        <div className="lg:col-span-2 space-y-6">

          {/* GENERAL */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#AE8737]" />
                General Information
              </h3>

              <input
                name="site_name"
                placeholder="Site Name"
                value={settings.site_name || ''}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />

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
            </CardContent>
          </Card>

          {/* SEO */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold text-lg">SEO Settings</h3>

              <input
                name="meta_title"
                placeholder="Meta Title"
                value={settings.meta_title || ''}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />

              <textarea
                name="meta_description"
                placeholder="Meta Description"
                value={settings.meta_description || ''}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </CardContent>
          </Card>

          {/* SAVE BUTTON */}
          <Button onClick={handleSave} disabled={loading}>
            <Save className="w-4 mr-2" />
            {loading ? 'Saving...' : 'Save Changes'}
          </Button>

        </div>

        {/* RIGHT PREVIEW */}
        <div className="space-y-6">

          {/* LOGO */}
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <h3 className="font-semibold flex items-center justify-center gap-2">
                <Image className="w-5 h-5 text-[#AE8737]" />
                Logo Preview
              </h3>

              {settings.logo_url ? (
                <img
                  src={settings.logo_url}
                  className="h-16 mx-auto object-contain"
                />
              ) : (
                <p className="text-slate-400 text-sm">No logo uploaded</p>
              )}

              <input
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="text-sm"
              />
            </CardContent>
          </Card>

          {/* LIVE PREVIEW */}
          <Card>
            <CardContent className="p-6 space-y-3">
              <h3 className="font-semibold">Live Preview</h3>

              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  {settings.logo_url && (
                    <img src={settings.logo_url} className="h-8" />
                  )}
                  <span className="font-bold text-[#191919]">
                    {settings.site_name || 'Your Website'}
                  </span>
                </div>

                <p className="text-sm text-slate-500">
                  {settings.meta_description || 'Website description preview...'}
                </p>
              </div>
            </CardContent>
          </Card>

        </div>

      </div>
    </div>
  );
}
