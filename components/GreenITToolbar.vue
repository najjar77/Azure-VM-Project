<script setup lang="ts">
import Menubar from "primevue/menubar";
import { ref } from "vue";
import Button from "primevue/button";
import "primeicons/primeicons.css";

import { useRouter } from "vue-router";

const router = useRouter();

const menuItems = ref([
  {
    label: "Upload Area",
    icon: "pi pi-cloud-upload",
    command: () => {
      router.push("/"); // Navigate to the index page
    },
  },
  {
    label: "Results",
    icon: "pi pi-chart-bar",
    command: () => {
      router.push("/results"); // Navigate to the Results.vue page
    },
  },
]);

async function downloadTemplate() {
  try {
    const response = await fetch("../api/download-template");
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

async function downloadTemplate1() {
  try {
    const response = await fetch(
      "../api/download-template?filename=testcon.java"
    );
    if (!response.ok) throw new Error("Server responded with an error.");

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "testcon.java";
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
  <Menubar :model="menuItems">
    <template #start>
      <img src="../assets/GITlogo.png" alt="Icon" class="toolbar-icon" />
    </template>
    <template #end>
      <div class="download-buttons">
        <Button
          label="Download Template"
          @click="downloadTemplate"
          size="small"
          icon="pi pi-download"
        />
        <Button
          label="Template Session 1"
          @click="downloadTemplate1"
          size="small"
          icon="pi pi-download"
        />
        <Button
          label="Template Session 2"
          @click="downloadTemplate"
          size="small"
          icon="pi pi-download"
        />
        <Button
          label="Template Session 3"
          @click="downloadTemplate"
          size="small"
          icon="pi pi-download"
        />
      </div>
    </template>
  </Menubar>
</template>

<style scoped>
.toolbar-icon {
  margin-right: 10px;
  width: 40px; /* Sets the width of the Logo */
  height: 40px; /* Sets the height of the Logo */
}

.download-buttons {
  display: flex;
  gap: 10px; /* Sets the space between the buttons */
}
</style>
