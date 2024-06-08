require('@babel/register');
const router = require('./src/App').default;
const Sitemap = require('react-router-sitemap').default;

const generateSitemap = () => (
  new Sitemap(router)
    .build('https://your-website.com')
    .save('./public/sitemap.xml')
);

generateSitemap();
