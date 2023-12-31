import { pwa } from './config/pwa'
import { appDescription } from './constants/index'
// import autoprefixer from 'autoprefixer'
// import postcssNesting from 'postcss-nesting'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
  ],
  // @ts-ignore
  experimental: { 
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  postcss: {
    plugins: [
  //     autoprefixer({}), // add options if needed
      // postcssNesting({}),
    ]
  },
  colorMode: {
    classSuffix: '',
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/passball.svg' },
        { rel: 'apple-touch-icon', href: '/passball-apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
      script: [
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-C29PG89RVC', async: true },
        { src: '/js/analysis.js' },
      ]
    },
  
  },

  pwa,

  
  devtools: {
    enabled: true,
  },

  runtimeConfig: {
    MONGODB_URI: process.env.MONGODB_URI,
    MONGODB_DATABASE: process.env.MONGODB_DATABASE,
    MONGODB_COLLECTION: process.env.MONGODB_COLLECTION,
  }
})
