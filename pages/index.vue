<script setup lang="ts">
import FileUploaderComponent from "~/components/FileUploaderComponent.vue";
</script>
<template>
  <div class="parent-container">
    <div class="file-uploader-container">
      <FileUploaderComponent />
    </div>
  </div>
</template>
<style scoped>
.parent-container {
  display: flex;
  justify-content: center; /* Centers horizontally */
  align-items: center; /* Centers vertically */
  height: 100vh; /* Optional: Makes the parent container fill the height of the viewport */
}

.file-uploader-container {
  /* Additional styling for the FileUploaderComponent container as needed */
}
</style>
