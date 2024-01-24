import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import NoSVG from './components/NoSVG.vue'
import TheMap from './components/TheMap.vue'
import StationsList from './components/StationsList.vue'
import templateSVG from './components/templateSVG.vue'
// import 3rdpartylibrary from 'place'

const app = createApp(App);

// app.use(3rdpartylibrary);
app.component('NoSVG', NoSVG);
app.component('TheMap', TheMap);
app.component('StationsList', StationsList);
app.component('templateSVG', templateSVG);

app.mount('#app');
