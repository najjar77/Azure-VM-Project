<script setup lang="ts">
import { ref } from "vue";

const file = ref<File | null>(null);

const uploadFile = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files?.length) {
    file.value = input.files[0];
  }
};

const submitFile = async () => {
  if (file.value) {
    const formData = new FormData();
    formData.append("file", file.value);

    try {
      await fetch("http://172.203.200.109/api/upload", {
        method: "POST",
        body: formData,
      });
      alert("File uploaded successfully");
    } catch (error) {
      console.error("Upload failed", error);
      alert("Upload failed");
    }
  }
};
</script>
<template>
  <div>
    <input type="file" @change="uploadFile" />
    <button v-if="file" @click="submitFile">Upload</button>
  </div>
</template>
<style scoped></style>
