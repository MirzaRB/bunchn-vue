<template>
  <header
    :class="[generateHeaderClasses]"
    :style="{ transform: isWhiteHeader ? 'translateX(-50%)' : '' }"
  >
    <div class="md:container flex justify-between items-center mx-auto">
      <router-link
        to="/dashboard"
        class="sm:w-24 lg:w-32"
      >
        <img
          :src="isWhiteHeader ? logo : logoWhite"
          alt="site-logo"
          class="w-full"
        >
      </router-link>
      <div
        v-if="isWhiteHeader"
        class="flex items-center"
      >
        <router-link
          to="/"
          class="sm:text-sm md:text-base font-semibold sm:mr-2.5 md:mr-5"
        >
          Business account?
        </router-link>
        <Button
          v-if="globalState.token"
          title="Log Out"
          type="pill-bordered"
          @on-press="logOut"
        />
        <router-link
          v-else
          to="/login"
        >
          <Button
            title="Log In"
            type="pill-bordered"
          />
        </router-link>
      </div>
      <div
        v-else
        class="flex items-center"
      >
        <router-link to="/login">
          <Button
            title="Log Out"
            type="secondary"
            @on-press="logOut"
          />
        </router-link>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { globalState } from '../store'

import Button from './Button.vue'

import logo from '../assets/logo.svg'
import logoWhite from '../assets/logo-white.svg'

export default defineComponent({
  components: {
    Button,
  },
  data: () => {
    return {
      logo,
      logoWhite,
      globalState,
    }
  },
  computed: {
    isWhiteHeader() {
      return this.$route.fullPath === '/' 
      || this.$route.fullPath === '/privacy'
      || this.$route.fullPath === '/terms'
      || this.$route.fullPath === '/contact'
      ? true : false
    },
    generateHeaderClasses() {
      let headerClasses =
        'w-full sm:p-3 md:p-4 lg:px-8 lg:py-6 rounded-bl-3xl rounded-br-3xl'
      this.$route.fullPath === '/' 
      || this.$route.fullPath === '/privacy'
      || this.$route.fullPath === '/terms'
      || this.$route.fullPath === '/contact'
        ? (headerClasses += ' max-w-5xl mx-auto bg-white absolute left-2/4')
        : (headerClasses += ' max-w-none bg-black container')
      return headerClasses
    },
  },
  methods: {
    logOut() {
      this.globalState.token = ''
      this.$router.push('/login')
    },
  },
})
</script>
