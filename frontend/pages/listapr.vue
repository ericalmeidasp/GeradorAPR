<template>
  <ListTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { aprs } from '@/store'
import { APR } from '@/models'

export default Vue.extend({
  layout: 'ibook',
  async asyncData() {
    await aprs.index()
  },
  
  computed: {
    $aprs(): APR[] {
      return aprs.$all
    }
  },

})
</script>
