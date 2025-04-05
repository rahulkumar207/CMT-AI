/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.cmtai.in', // ✅ Replace with your domain
    generateRobotsTxt: true, // ✅ It will also create a robots.txt file
    sitemapSize: 5000,
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/admin', '/internal-page'], // ❌ Optional: exclude private routes
  };
  