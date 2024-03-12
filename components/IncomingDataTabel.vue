<script lang="ts" setup>
import { ref, onMounted } from "vue";
import Card from "primevue/card";
import "primeicons/primeicons.css";

const results = ref<string[]>([]);

async function fetchResults() {
  try {
    const data: string[] = await $fetch("../api/getResults");
    results.value = data;
  } catch (error) {
    console.error("Fehler beim Abrufen der Ergebnisse:", error);
  }
}

onMounted(fetchResults);
//TODO: Card should be limited when input is too big (no flex css)
</script>

<template>
  <Card class="Card-Custom">
    <template #title>Ergebnisse anzeigen</template>
    <template #content>
      <ul v-if="results.length > 0">
        <li v-for="(result, index) in results" :key="index">{{ result }}</li>
      </ul>
      <p v-else>Keine Ergebnisse gefunden.</p>
    </template>
  </Card>
</template>

<style scoped>
.Card-Custom {
  width: 400px;
  margin-top: 20px;
}
</style>
