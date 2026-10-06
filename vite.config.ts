import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const SITE_URL = 'https://bartosz-szwugier.github.io/curriculum-vitae/';

function seoFiles(): Plugin {
  return {
    name: 'seo-files',
    transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', SITE_URL),
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10);
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`,
      });
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}sitemap.xml\n`,
      });
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [react(), seoFiles()],
});
