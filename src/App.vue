<template>
  <header>
    <img alt="Map logo" class="logo" src="./assets/mapIcon.svg" width="140" height="140" />
    <div class="wrapper">
      <NoSVGWelcome msg="Welcome," />
    </div>
  </header>

  <main class="wrapper">
        <StationsList/>
        <TheMap/>
  </main>
</template>


<style scoped>
header {
  line-height: 1.5;
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
}
</style>
