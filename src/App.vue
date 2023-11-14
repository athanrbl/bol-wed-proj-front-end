<template>

  <main>
    <div class="grid">
      <header>
        <img alt="Map logo" class="logo" src="./assets/mapIcon.svg" width="140" height="140" />
        <NoSVGWelcome msg="Welcome," />
      </header>
        <StationsList/>
        <Suspense>
          <TheMap/>
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
