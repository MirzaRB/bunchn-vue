<template>
  <div class="w-full bg-white max-w-none min-h-screen relative">
    <Header v-if="isProtected" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Header from './components/Header.vue'

export default defineComponent({
  components: {
    Header,
  },
  computed: {
    isProtected() {
      return this.$route.fullPath === '/login' ? false : true
    },
  },
})
</script>
