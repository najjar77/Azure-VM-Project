<script setup>
import FileUploaderComponent from "~/components/FileUploaderComponent.vue";
import Divider from "primevue/divider";
</script>
<template>
  <NuxtLink to="/results">
    <Button label="Go to Results" severity="secondary" />
  </NuxtLink>

  <div>
    <FileUploaderComponent />
  </div>
</template>
<style scoped></style>
