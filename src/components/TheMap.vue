<template>
  <GoogleMap :api-key="mapKEY" :map-id="mapID" style="position: absolute; width: 45%; height: 50%" :center="center" :min-zoom="17" :zoom="18" :max-zoom="19" :disable-default-ui="true">
    <InfoWindow :options="{ position: center, content: 'Click on a Metro Station to preview!' }" />
  </GoogleMap>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";
import { apiKey, mapId } from "../../mapCredentials.json";

async function mapPoint() {
  const mapCreds = await fetch("http://192.168.15.15:3000/mapCreds")
  .then(response => {
    return response.json();
  }).then(data => {
    console.log(data);
  }).catch(err => {
    console.log(console.error())
  })
}

export default defineComponent({
  components: { GoogleMap, Marker, InfoWindow },
  setup() {
    const center = { lat: 37.975531, lng: 23.735377 };
    const mapKEY = ref(apiKey)
    const mapID = ref(mapId)
    mapPoint()
    return { center, mapKEY, mapID };
  }

});
</script>

<style scoped>
div {
  color: black;
}
</style>