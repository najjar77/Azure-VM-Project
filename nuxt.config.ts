// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-primevue"],

  primevue: {
    usePrimeVue: true,
    components: {
      include: ["Button", "DataTable", "Divider"],
    },
  },

  css: ["primevue/resources/themes/aura-light-green/theme.css"],

  devServer: {
    port: 80,
  },

  plugins: ["~/plugins/toast-service"],
  compatibilityDate: "2024-08-20",
});