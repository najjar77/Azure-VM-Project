<script setup lang="ts"></script>
<template>
  <Button label="Back to Upload Area" @click="$router.go(-1)" />
  <div>
    <IncomingDataTabel />
  </div>
</template>
<style scoped></style>
