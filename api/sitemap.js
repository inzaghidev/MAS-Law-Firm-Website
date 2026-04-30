import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {

  // ambil data dari supabase
  const { data, error } = await supabase
    .from('news')
    .select('slug, date');

  if (error) {
    return res.status(500).send("Error ambil data");
  }

  // base domain lo
  const baseUrl = "https://www.lawyermas.com";

  // generate url artikel
  const urls = data.map(item => `
    <url>
      <loc>${baseUrl}/news/${item.slug}</loc>
      <lastmod>${new Date(item.date).toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
  `).join('');

  // hasil akhir sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

    ${urls}

  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.status(200).send(sitemap);
}