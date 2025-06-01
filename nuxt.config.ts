// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],
  appConfig: {
    business: {
      name: "Antonio's Preventative Maintenance and Service Corp",
      phone: "(555) 123-4567",
      email: "info@antonionspreventativemaintance.com",
      serviceArea: "Indianapolis and surrounding areas"
    },
    tailwindcss: {
      config: {
        safelist: [
          'bg-emerald-600',
          'hover:bg-emerald-700',
          'bg-emerald-100'
        ]
      }
    }
  }
})
