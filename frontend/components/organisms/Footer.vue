<template>
  <footer class="footer">
    <Container>
      <p>Setac</p>
      <p>Copyright &copy; {{ currentYear }} - Gerador de APR</p>
    </Container>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
})
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 60px;
  background: color(dark, darkest);
  .container {
    display: grid;
    height: 100%;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    p {
      color: color('light', 'darkest');
    }
  }
}
</style>
