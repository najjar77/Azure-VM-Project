<script setup lang="ts">
import { ref } from "vue";
import fs from "fs";

const file = ref<File | null>(null);
const uploadFileText = "";
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
    console.log("fs= ", fs.readFileSync("/api/upload.ts"));
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
