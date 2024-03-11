<script setup>
import FileUploaderV2 from "~/components/FileUploaderV2.vue";
import FileUploaderComponent from "~/components/FileUploaderComponent.vue";
import Divider from "primevue/divider";
</script>
<template>
  <div>
    <FileUploaderComponent />
  </div>
  <Divider />
  <div>
    <FileUploaderV2 />
  </div>
</template>
<style scoped></style>
