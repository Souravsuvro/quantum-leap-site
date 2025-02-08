const fs = require('fs');
const path = require('path');

// Base URL for the website
const BASE_URL = 'https://www.quantumleaps.com';

// Define site pages with their priorities and change frequencies
const PAGES = [
  { 
    path: '/', 
    priority: '1.0', 
    changefreq: 'daily' 
  },
  { 
    path: '/about', 
    priority: '0.8', 
    changefreq: 'weekly' 
  },
  { 
    path: '/labq-fusion', 
    priority: '0.9', 
    changefreq: 'weekly' 
  },
  { 
    path: '/carelink-access', 
    priority: '0.9', 
    changefreq: 'weekly' 
  },
  { 
    path: '/error/404', 
    priority: '0.1', 
    changefreq: 'yearly' 
  },
  { 
    path: '/error/401', 
    priority: '0.1', 
    changefreq: 'yearly' 
  },
  { 
    path: '/error/503', 
    priority: '0.1', 
    changefreq: 'yearly' 
  },
  { 
    path: '/error/504', 
    priority: '0.1', 
    changefreq: 'yearly' 
  }
];

// Generate sitemap XML
function generateSitemap() {
  const date = new Date().toISOString();

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${PAGES.map(page => `
  <url>
    <loc>${BASE_URL}${page.path}</loc>
    <lastmod>${date}</lastmod>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
  </url>`).join('')}
</urlset>`;

  // Ensure public directory exists
  const publicDir = path.resolve(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  // Write sitemap
  fs.writeFileSync(path.resolve(publicDir, 'sitemap.xml'), sitemapXml);
  console.log('Sitemap generated successfully at public/sitemap.xml');
}

// Generate robots.txt alongside sitemap
function generateRobotsTxt() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml`;

  fs.writeFileSync(path.resolve(__dirname, '../public/robots.txt'), robotsTxt);
  console.log('robots.txt generated successfully');
}

// Run generation
generateSitemap();
generateRobotsTxt();
