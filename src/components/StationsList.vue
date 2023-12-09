<template>
  <nav class="staList green">
    <h3 class="grid">Stations List</h3>
    <button id="btn1" onclick="" class="stCol green"><h2>SYNTAGMA</h2></button>
    <button id="btn2" onclick="" class="stCol green"><h2>MONASTIRAKI</h2></button>
    <button id="btn3" onclick="" class="stCol green"><h2>KATEHAKI</h2></button>
    <button id="btn4" onclick="" class="stCol green"><h2>station 4</h2></button>
    <button id="btn5" onclick="" class="stCol green"><h2>station 5</h2></button>

  </nav>
</template>

<script lang="ts">
//asdasd
</script>

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