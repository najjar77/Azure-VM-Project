<script lang="ts" setup>
import Button from "primevue/button";
import FileUpload, { type FileUploadSelectEvent } from "primevue/fileupload";
import Card from "primevue/card";
import "primeicons/primeicons.css";
import { ref } from "vue";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";

const toast = useToast();

function showSuccess() {
  toast.add({
    severity: "success",
    summary: "Upload Successfully",
    detail: "Your file was successfully submited",
    life: 5000,
  });
}

function showError() {
  toast.add({
    severity: "error",
    summary: "Upload Error",
    detail: "Your file could not be submitted",
    life: 5000,
  });
}

function handleFileChange2(event: FileUploadSelectEvent) {
  files.value = event.files; // Assuming `files` is the correct property.
  console.log("Selected Files Value22: ", files.value);
}

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

  if (Array.isArray(data)) {
    if (data.length > 0) {
      showSuccess();
      console.log("Success is called ", data);
    }
  }
  setTimeout(() => {
    window.location.reload();
  }, 2000);
}
</script>
<template>
  <Toast />
  <Card class="Card-Custom">
    <template #title>File Uploader</template>
    <template #content>
      <p class="m-0">
        Please submit your script here and give it a meaningful name. <br />
        Allowed data types: .java .txt
      </p>
    </template>
    <template #footer>
      <div class="button-container">
        <FileUpload
          mode="basic"
          :auto="false"
          :customUpload="true"
          @select="handleFileChange2"
          accept=".java, .txt"
          chooseLabel="Select File"
        ></FileUpload>
        <Button
          label="Submit File"
          icon="pi pi-check"
          @click="handleFileSubmit"
        ></Button>
      </div>
      <!--
      <div>
        <form @submit.prevent="handleFileSubmit">
          <input type="file" @change="handleFileChange" />
          <button type="submit">Submit file</button>
        </form>
      </div>
      -->
    </template>
  </Card>
</template>
<style scoped>
.Card-Custom {
  width: 600px;
}

.button-container {
  display: flex;
  align-items: center; /* This will vertically center align items if their heights are different */
  gap: 50px; /* This creates space between the buttons */
}
</style>
