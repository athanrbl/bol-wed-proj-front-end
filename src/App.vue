<template>
  <header>
    <img alt="Map logo" class="logo" src="./assets/mapIcon.svg" width="140" height="140" />
    <div class="wrapper">
      <NoSVGWelcome msg="Welcome," />
    </div>
  </header>

  <main>
      <StationsList/>
      <TheMap msg="Stations List"/>
  </main> 
</template>


<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .inner {
    position: absolute;
  }
}
</style>