// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-primevue"],
  primevue: {
    usePrimeVue: true,
    components: {
      include: ["Button", "DataTable"],
    },
  },
  css: ["primevue/resources/themes/aura-light-green/theme.css"],
  devServer: {
    port: 80,
  },
});
