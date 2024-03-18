<script lang="ts" setup>
import Button from "primevue/button";
import FileUpload from "primevue/fileupload";
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
    // window.location.reload();
  }, 4000);
}

//TODO: the select of the api call musst be corrected, also the triggering of the showSuccess
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
      <div>
        <FileUpload
          mode="basic"
          :auto="true"
          :customUpload="true"
          @select="handleFileSubmit"
          accept=".java, .txt"
          chooseLabel="Select File"
        ></FileUpload>
        <Button
          label="Submit File"
          icon="pi pi-check"
          @click="handleFileSubmit"
        ></Button>
      </div>
      <div>
        <form @submit.prevent="handleFileSubmit">
          <input type="file" @change="handleFileChange" />
          <button type="submit">Submit file</button>
        </form>
      </div>
    </template>
  </Card>
</template>
<style scoped>
.Card-Custom {
  width: 550px;
}
</style>
