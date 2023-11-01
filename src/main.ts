import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import NoSVGWelcome from './components/NoSVG.vue'
import TheMap from './components/TheMap.vue'
import StationsList from './components/StationsList.vue'
// import 3rdpartylibrary from 'place'

const app = createApp(App);

// app.use(3rdpartylibrary);
app.component('NoSVGWelcome', NoSVGWelcome);
app.component('TheMap', TheMap);
app.component('StationsList', StationsList);

app.mount('#app');
