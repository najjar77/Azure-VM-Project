<script setup>
import Button from "primevue/button";
import FileUpload from "primevue/fileupload";
import Card from "primevue/card";

import "primeicons/primeicons.css";
</script>
<template>
  <Card>
    <template #title>File Uploader</template>
    <template #content>
      <p class="m-0">to test you'r script upload the file here.</p>
    </template>
    <template #footer>
      <FileUpload mode="basic" url="/api/upload" :maxFileSize="100000000" />
      <Button label="Use Uploaded File" icon="pi pi-check" />
    </template>
  </Card>

  <div></div>
</template>
<style scoped></style>
