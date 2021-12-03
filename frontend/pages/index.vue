<template>
  <HomeTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { aprs } from '@/store'

export default Vue.extend({
  layout: 'ibook',
  async asyncData() {
    await aprs.fetchGlobalRisks()
  }
})
</script>

<style scoped></style>
