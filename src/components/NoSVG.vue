<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="template">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      choose a <a href="#" target="_blank" rel="noopener">Station</a> for more Information.
    </h3>
  </div>
</template>
