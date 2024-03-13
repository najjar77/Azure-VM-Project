<script setup>
import FileUploaderComponent from "~/components/FileUploaderComponent.vue";
import Divider from "primevue/divider";
</script>
<template>
  <NuxtLink to="/results">
    <Button label="Go to Results" />
  </NuxtLink>

  <div>
    <FileUploaderComponent />
  </div>
  <Divider />
</template>
<style scoped></style>
