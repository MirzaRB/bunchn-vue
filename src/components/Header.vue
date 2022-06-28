<template>
  <header
    :class="[generateHeaderClasses]"
    :style="{ transform: isWhiteHeader ? 'translateX(-50%)' : '' }"
  >
    <router-link
      to="/"
      class="w-32"
    >
      <img
        :src="isWhiteHeader ? logo : logoWhite"
        alt="site-logo"
      >
    </router-link>
    <div
      v-if="isWhiteHeader"
      class="flex items-center"
    >
      <router-link
        to="/"
        class="text-base font-semibold mr-5"
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
      <router-link
        to="/dashboard"
        class="mr-5"
      >
        <Button
          title="Dashboard"
          type="primary-bordered"
        />
      </router-link>
      <router-link
        to="/login"
        class="mr-5"
      >
        <Button
          title="Log Out"
          type="secondary"
          @on-press="logOut"
        />
      </router-link>
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
      return this.$route.fullPath === '/' ? true : false
    },
    generateHeaderClasses() {
      let headerClasses =
        'w-full flex justify-between px-8 py-6 rounded-bl-3xl rounded-br-3xl'
      this.$route.fullPath === '/'
        ? (headerClasses += ' max-w-5xl mx-auto bg-white absolute left-2/4')
        : (headerClasses += ' max-w-none bg-black')
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
