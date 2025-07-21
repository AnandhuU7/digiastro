import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import partytown from '@astrojs/partytown';
import playformCompress from "@playform/compress";
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://dubai-hikvision.com',
  base: '/',
  trailingSlash: 'ignore',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
    format: 'preserve'
  },
  integrations: [
    tailwind(),
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'en-AE',
        locales: {
          'en-AE': 'en-AE',
          'en-UAE': 'en-UAE'
        }
      },
      filter: (page) => !page.includes('/admin'),
      serialize: (item) => {
        if (item.url === 'https://dubai-hikvision.com/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        }
        if (item.url.includes('/productsnew')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        }
        if (item.url.includes('/blogs')) {
          item.priority = 0.6;
          item.changefreq = 'weekly';
        }
        return item;
      }
    }),
    partytown({
      config: {
        forward: ["dataLayer.push", "gtag"]
      }
    }),
    playformCompress({
      CSS: true,
      HTML: {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      },
      Image: true,
      JavaScript: true,
      SVG: true
    }),
    icon()
  ],
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild'
    }
  }
});
