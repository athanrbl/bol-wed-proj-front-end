<script lang="ts" setup>
import { ref } from 'vue';
import NoSVG from './components/NoSVG.vue';
import TemplateSVG from './components/templateSVG.vue';

let welcomeVisibility = true;

type Station = {
  id: string,
  name: string,
  images: string[],
  info: string,
  position: { lat: number, lng: number}
};

const images = ref<string[]>([]);
const info = ref<string>('');
const currentPosition = ref({ lat: 37.975531, lng: 23.735377 });

const stations = ref<Station[]>([
  { 
    id: 'Katehaki',
    name: 'KATEHAKI',
    images: ['1', '2'],
    info: 'Located on (Blue) Line 3, the Katehaki metro line can take you from the Airport to the Piraeus Pier directly. It connects to (Green) Line 1 on Monastiraki, and (Red) Line 2 on Syntagma.',
    position: {
      lat: 37.99327439768541,
      lng: 23.776143937689444
    }
  },
  { 
    id: 'Syntagma',
    name: 'SYNTAGMA',
    images: ['1', '2', '3', '4'],
    info: 'test',
    position: {
      lat: 37.9756419235143,
      lng: 23.735385625204955
    }
  },
  { 
    id: 'Monastiraki',
    name: 'MONASTIRAKI',
    images: ['1', '2', '3'],
    info: 'Test2',
    position: {
      lat: 37.97609014903722,
      lng: 23.72561083372695
    }
  }
]);

function imgRes(res: Response) {
  res.blob().then((blob) => {
    let imageUrl = URL.createObjectURL(blob);
    images.value.push(imageUrl);
  });
}

function toggleStation(station: Station) {
  images.value = []
  station.images.forEach(image => {
    fetch(`http://127.0.0.1:3000/StationSVGs/${station.id}${image}`).then(imgRes);
  });
  currentPosition.value = station.position;
  info.value = station.info;
  welcomeVisibility = false;
}

</script>

<template>
  <main>
    <div class="grid">
      <header>
        <img alt="Map logo" class="logo" src="./assets/mapIcon.svg" width="140" height="140" />
        <NoSVG v-show="welcomeVisibility" msg="Welcome," />
        <div v-if="images.length > 0">
          <TemplateSVG :images=images :info=info />
        </div>
      </header>
      <StationsList id="stListRef" :stations="stations" @toggleStation="toggleStation"/>
      <Suspense class="mapBox">
        <TheMap :position="currentPosition" />
      </Suspense>
    </div>
  </main>
</template>


<style scoped>
@media (min-width: 1024px) {
  header {
    line-height: 1.5;
    display: flex;
    place-items: center;
    grid-row: 1 / -1;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 400px 500px;
    place-items: center;
  }
}
</style>
