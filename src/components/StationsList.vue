
<script lang="ts" setup>
import type { PropType } from 'vue'

const props = defineProps({
  stations: {
    type: Array as PropType<{ id: string; name: string, position: { lat: number, lng: number}}[]>,
    required: true
  }
})
</script>

<template>
  <nav class="staList green">
    <h3 class="grid">Stations List</h3>
    <button v-for="station in stations" :id="station.id" class="stCol green" @click="$emit('toggleStation', station)"><h2>{{station.name}}</h2></button>
    <button id="btn4" class="stCol" style="color: rgb(150,151,135)"><h2>station 4</h2></button>
    <button id="btn5" class="stCol" style="color: rgb(150,151,135)"><h2>station 5</h2></button>
  </nav>
</template>

<style scoped>
.staList {
  background-color: #232527;
  width: 95%;
  height: 95%;
  
  overflow-y: scroll;

  padding: 10px;
  list-style-image: url('@/assets/metroIcon.svg');
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 30px;
  place-items: center;
}

.stCol {
  background-color: #131314;
  align-items: center;
  width: 100%;
  height: 20%;
  margin-top: .3%;
}

/*scroll bars*/
*::-webkit-scrollbar {
  width: 4px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background: rgb(13, 168, 78);
  border-radius: 10px;
}

*::-webkit-scrollbar-thumb:hover {
  background: rgb(11, 124, 58);
  border-radius: 10px;
}

*::-webkit-scrollbar-thumb:active {
  background: rgb(6, 71, 33);
  border-radius: 10px;
}
</style>