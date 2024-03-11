// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  server: {
    port: 80,
  },
  devServer: {
    port: 80,
  },
  modules: ["nuxt-primevue"],
  primevue: {
    usePrimeVue: true,
    components: {
      include: ["Button", "DataTable"],
    },
  },
  css: ["primevue/resources/themes/aura-light-green/theme.css"],
});
