<script lang="ts" setup>
import Button from "primevue/button";
import FileUpload from "primevue/fileupload";
import Card from "primevue/card";
import "primeicons/primeicons.css";
import { ref } from "vue";

const files = ref<FileList | null>(null);
//@ts-ignore
function handleFileChange(e: Event) {
  //@ts-ignore
  files.value = (e.target as HTMLInputElement).files;
  console.log("Selected Files Value: ", files.value);
}
async function handleFileSubmit() {
  const fd = new FormData();
  if (files.value) {
    Array.from(files.value).forEach((file, index) => {
      fd.append(`index${index}`, file);
    });
  }
  const data = await $fetch("/api/file", {
    method: "POST",
    body: fd,
  });
  console.log(data);
}

async function downloadTemplate() {
  try {
    const response = await fetch("/api/download-template");
    if (!response.ok) throw new Error("Server responded with an error.");

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "template.java";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  } catch (error) {
    console.error("Fehler beim Herunterladen der Datei: ", error);
  }
}
</script>
<template>
  <Card class="Card-Custom">
    <template #title>File Uploader</template>
    <template #content>
      <p class="m-0">to test your script upload the file here.</p>
    </template>
    <template #footer>
      <div>
        <form @submit.prevent="handleFileSubmit">
          <input type="file" @change="handleFileChange" />
          <button type="submit">Submit file</button>
        </form>
      </div>
    </template>
  </Card>
  <div>
    <Button label="Download Template" @click="downloadTemplate" size="small" />
  </div>
</template>
<style scoped>
.Card-Custom {
  width: 400px;
}
</style>
