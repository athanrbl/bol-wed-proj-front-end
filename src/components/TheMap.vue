<template>
    <Suspense>
      <GoogleMap :api-key="mapKEY" :map-id="mapID" style="width: 95%; height: 95%" :center="center" :min-zoom="17" :zoom="18" :max-zoom="19" :disable-default-ui="true">
      <InfoWindow :options="{ position: center, content: 'Click on a Metro Station to preview!' }" />
      </GoogleMap>
    </Suspense>
</template>

<script lang="ts">
import { defineComponent, onMounted, Suspense } from "vue";
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";

async function mapPoint() {
  const mapCreds = (await fetch("http://127.0.0.1:3000/mapCreds")).json()
  return mapCreds;
}

export default defineComponent({
  components: { GoogleMap, Marker, InfoWindow },
  setup() {
    const center = { lat: 37.975531, lng: 23.735377 };
    
    let mapKEY;
    let mapID;

    
    onMounted(async () => {
      const apiRes = await mapPoint()
      console.log(apiRes)
      //mapKEY = apiRes
      //console.log(`KEY: ${mapKEY}`)
      //mapID = apiRes
    })

    return { center, mapKEY, mapID };
  }
});
</script>

<style scoped>
div {
  color: black;
}
</style>