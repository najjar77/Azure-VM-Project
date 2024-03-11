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
  //console.log(files.value);
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
</script>
<template>
  <Card class="Card-Custom">
    <template #title>File Uploader</template>
    <template #content>
      <p class="m-0">to test you'r script upload the file here.</p>
    </template>
    <template #footer>
      <div>
        <form @submit.prevent="handleFileSubmit">
          <input type="file" @change="handleFileChange" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </template>
  </Card>
</template>
<style scoped>
.Card-Custom {
  width: 400px;
}
</style>
