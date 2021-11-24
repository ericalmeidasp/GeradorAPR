<template>
  <div class="ibook-layout">
      <Header />
    <Container>
      <Nuxt />
    </Container>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.ibook-layout {
  margin-top: 3rem;
  display: grid;
  grid-gap: 2rem;

  .container {
    padding-bottom: 6.75rem;
  }

  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
