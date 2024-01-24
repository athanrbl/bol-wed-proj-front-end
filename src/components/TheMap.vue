<template>
      <GoogleMap :api-key="mapKEY" :map-id="mapID" style="width: 95%; height: 95%" :center="position" :min-zoom="17" :zoom="18" :max-zoom="19" :disable-default-ui="true">
        <InfoWindow :options="{ position: position, content: 'Click on the Metro Station to preview!' }" />
      </GoogleMap>
</template>

<script lang="ts" setup>
import { defineComponent, ref, watch } from "vue";
import type { PropType } from "vue";
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";

const props = defineProps({
  position: {
    type: Object as PropType<{ lat: number, lng: number}>,
    default: { lat: 37.975531, lng: 23.735377 }
  }
});

  // input different lat/long based on station button click
    
  const mapKEY = ref("");
  const mapID = ref("");
    
  const apiRes = await mapPoint()
  mapKEY.value = apiRes["Key"]
  mapID.value = apiRes["Id"]

  async function mapPoint() {
    const mapCreds = (await fetch("http://127.0.0.1:3000/mapCreds")).json()
    return mapCreds;
  }
</script>

<style scoped>
div {
  color: black;
}
</style>