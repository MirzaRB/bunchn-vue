<template>
  <header class="w-full max-w-5xl mx-auto flex justify-between bg-white px-8 py-6 rounded-bl-3xl rounded-br-3xl absolute left-2/4">
    <router-link to="/" class="w-32">
      <img
        :src="logo"
        alt="site-logo"
      >
    </router-link>
    <div class="flex items-center">
      <router-link
        to="/"
        class="text-base font-semibold mr-5"
      >
        Business account?
      </router-link>
      <router-link
        to="/login"
        class="text-lg mr-5"
      >
        <Button
          title="login"
          type="pill-bordered"
          @on-press="login"
        />
      </router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Button from './Button.vue'

import logo from '../assets/logo.svg'

export default defineComponent({
  components: {
      Button,
  },
  data: () => {
      return {
        logo,
    }
  },
  methods: {
      login() {
          javascript:void(0)
      },
  },
})
</script>

<style scoped>
    header {
        transform: translateX(-50%);
    }
</style>
