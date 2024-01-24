<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  images: string[],
  info: string
}>()

let focImg = ref(props.images[0]);

function mainShow(image: string) {
  focImg.value = image;
}
</script>

<template>
  <div class="grid top" style="grid-template-columns: 1fr 1fr 1fr 1fr;">
    <img id="svgImg" v-for="image in images" class="svgImage" alt="Station Map" @click="mainShow(image)" :src="image" width="140" height="140">
  </div>
  <img id="svgExpl" class="grid svgExplanation" alt="Explanation" src="../assets/Explanation.svg" width="300" height="100" style="margin-bottom: 20%; background-color: rgba(1, 1, 1, 0.1); grid-template-columns: 1fr;">
  <div class="grid center" style="grid-template-columns: 1fr;">
    <img id="focusedImage" :src='focImg' style="background-color: rgba(1, 1, 1, 0.1); width: 75%;">
  </div>
  <div class="grid centerbot" style="margin-top: 6%; grid-template-columns: 1fr;"> {{ info }} </div>
</template>


<style scoped>
@media (min-width: 512px) {
  .grid {
    display: grid;
    grid-template-rows: 230px;
    place-items: center;
    width: 100%;
  }

  .svgImage {
    background-color: rgba(1, 1, 1, 0.1);
  }

  .svgImage:hover {
    background-color: rgba(1, 1, 1, 0.2);
  }
  .svgImage:active {
    background-color: rgba(19, 19, 19, 0.2);
  }
}
</style>