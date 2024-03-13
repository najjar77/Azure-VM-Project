<script lang="ts" setup>
import { ref, onMounted } from "vue";
import Card from "primevue/card";
import "primeicons/primeicons.css";

interface Result {
  name: string;
  content: string;
}

const results = ref<Result[]>([]);

async function fetchResults() {
  try {
    const data: string[] = await $fetch("../api/getResults");
    //@ts-ignore
    results.value = data;
  } catch (error) {
    console.error("Fehler beim Abrufen der Ergebnisse:", error);
  }
}

onMounted(fetchResults);
</script>

<template>
  <Card class="Card-Custom">
    <template #title>Ergebnisse</template>
    <template #content>
      <div class="content-wrapper">
        <ul v-if="results.length > 0">
          <!-- Zugriff auf name und content jedes Ergebnis-Objekts -->
          <li v-for="(result, index) in results" :key="index">
            <strong>Dateiname: </strong>{{ result.name }}<br />
            <strong>Resultat: </strong>{{ result.content }}
          </li>
        </ul>
        <p v-else>Keine Ergebnisse gefunden.</p>
      </div>
    </template>
  </Card>
</template>

<style scoped>
.Card-Custom {
  max-width: 800px; /* Use max-width for flexible width up to 800px */
  margin-top: 20px;
}

.content-wrapper {
  max-height: auto; /* Adjust this value based on your needs */
  overflow-y: auto; /* Show scrollbar when content exceeds max-height */
}
</style>
