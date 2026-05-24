import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// Op GitHub Pages draait de app op /nimmaendingstory/ — lokaal op /
const base = process.env.GITHUB_ACTIONS ? '/nimmaendingstory/' : '/'

export default defineConfig({
  base,
  define: {
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.js'],
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      base,
      includeAssets: ['favicon.svg', 'icons/*.png', 'photo.jpg', 'cats/*.jpg'],
      manifest: {
        name: 'Nimma Ending Story',
        short_name: 'NES',
        description: 'Een GPS-puzzeltocht voor een bijzonder stel',
        theme_color: '#1a1209',
        background_color: '#1a1209',
        display: 'standalone',
        orientation: 'portrait',
        start_url: base,
        scope: base,
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
        ],
      },
      workbox: {
        navigateFallback: 'index.html',
        globPatterns: ['**/*.{js,css,html,svg,png,jpg,jpeg,woff2}'],
        globIgnores: ['filmquiz/**', 'tijdvliegt/**'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
        ],
      },
    }),
  ],
})
