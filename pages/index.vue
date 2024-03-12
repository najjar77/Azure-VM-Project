<script setup>
import FileUploaderComponent from "~/components/FileUploaderComponent.vue";
import Divider from "primevue/divider";
</script>
<template>
  <div>
    <FileUploaderComponent />
  </div>
  <Divider />
  <NuxtLink to="/results">
    <Button label="Go to Results" />
  </NuxtLink>
</template>
<style scoped></style>
