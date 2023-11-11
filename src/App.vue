<template>
  <header>
    <img alt="Map logo" class="logo" src="./assets/mapIcon.svg" width="140" height="140" />
    <div class="wrapper">
      <NoSVGWelcome msg="Welcome," />
    </div>
  </header>

  <main>
    <div class="grid">
      <StationsList/>
      <TheMap/>
    </div>
  </main>
</template>


<style scoped>
@media (min-width: 1024px) {
  header {
    line-height: 1.5;
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
