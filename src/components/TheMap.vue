<template>
      <GoogleMap :api-key="mapKEY" :map-id="mapID" style="width: 95%; height: 95%" :center="center" :min-zoom="17" :zoom="18" :max-zoom="19" :disable-default-ui="true">
      <InfoWindow :options="{ position: center, content: 'Click on a Metro Station to preview!' }" />
      </GoogleMap>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";

async function mapPoint() {
  const mapCreds = (await fetch("http://127.0.0.1:3000/mapCreds")).json()
  return mapCreds;
}


export default defineComponent({
  components: { GoogleMap, Marker, InfoWindow },
  async setup() {
    const center = { lat: 37.975531, lng: 23.735377 };
    
    let mapKEY = ref("");
    let mapID = ref("");
    
    const apiRes = await mapPoint()
      mapKEY = apiRes["Key"]
      mapID = apiRes["Id"]

    return { center, mapKEY, mapID };
  }
});
</script>

<style scoped>
div {
  color: black;
}
</style>