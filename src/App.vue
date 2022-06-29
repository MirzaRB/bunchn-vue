<template>
  <div :class="[mainClass, 'bg-root-background']">
    <Header v-if="isProtected" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Header from './components/Header.vue'
import { globalState } from './store'

export default defineComponent({
  components: {
    Header,
  },
  data() {
    return {
      mainClass: 'w-full max-w-none min-h-screen relative',
      bgClass: globalState.token ? 'bg-authBg' : 'bg-white',
    }
  },
  computed: {
    isProtected() {
      return this.$route.fullPath === '/login' ? false : true
    },
  },
})
</script>
