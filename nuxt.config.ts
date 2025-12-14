export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],
  appConfig: {
    business: {
      name: "Antonio's Preventative Maintenance and Service",
      phone: "(555) 123-4567",
      email: "info@antonionspreventativemaintance.com",
      serviceArea: "Indianapolis and surrounding areas"
    }
  },
  tailwindcss: {
    config: {
      safelist: [
        'bg-emerald-600',
        'hover:bg-emerald-700',
        'bg-emerald-100'
      ]
    }
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  ssr: false,
  app: {
    baseURL: '/plumber-website/', // Replace 'plumber-website' with your actual repo name
    buildAssetsDir: 'assets/',
    head: {
      link: []
    }
  }
})