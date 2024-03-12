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
    console.log("fileValue: ", file.value);

    formData.append("file", file.value);

    const fs = require("fs");
    // To read Static Files
    const files = fs.readdirSync("./api/");
    console.log("file : ", files);

    try {
      await fetch("./server/api/upload.ts", {
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
