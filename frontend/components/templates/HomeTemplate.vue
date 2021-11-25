<template>
  <div class="home-template">
    <PageTitle text="Gerador de" strong="APR" />

    <component :is="$view" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { gerais } from '@/store'

export default Vue.extend({
  computed: {
    $view() {
      return gerais.$view
    }
  }
})
</script>

<style lang="scss" scoped>
.home-template {
  display: grid;
  grid-gap: 1rem;
}
</style>
