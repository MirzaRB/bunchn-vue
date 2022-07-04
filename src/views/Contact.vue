<template>
  <div class="max-w-none min-h-screen min-w-full bg-white">
    <div class="h-screen min-h-half bg-hero-background bg-no-repeat bg-cover" />
    <div class="max-w-screen-md mx-auto py-16">
      <p class="font-mont text-center sm:text-2xl md:text-4xl lg:text-6xl font-normal">
        Contact
      </p>
    </div>
    <div class="flex justify-center items-center pb-16">
      <div class="sm:mr-2 md:mr-3">
        <img
          :src="playStoreIcon"
          alt="play-store"
          class="rounded-xl shadow-2xl shadow-black sm:w-32 md:w-40 lg:w-52 cursor-pointer"
        >
      </div>
      <div class="sm:ml-2 md:ml-3">
        <img
          :src="appStoreIcon"
          alt="app-store"
          class="rounded-xl shadow-2xl shadow-black sm:w-32 md:w-40 lg:w-52 cursor-pointer"
        >
      </div>
    </div>
    <div class="bg-grey sm:py-7 md:py-12">
      <div class="sm:w-full md:w-3/4 lg:w-1/2 mx-auto px-5 pb-8 flex justify-between">
        <router-link
          to="/privacy"
          class="text-primary font-semibold sm:text-base md-text-lg lg:text-xl"
        >
          Privacy Policy
        </router-link>
        <router-link
          to="/terms"
          class="text-primary font-semibold sm:text-base md-text-lg lg:text-xl"
        >
          Terms
        </router-link>
        <router-link
          to="/contact"
          class="text-primary font-semibold sm:text-base md-text-lg lg:text-xl"
        >
          Contact Us
        </router-link>
      </div>
      <div class="max-w-sm mx-auto flex justify-around">
        <img
          :src="instaIcon"
          alt="instagram"
          class="cursor-pointer sm:w-5 md:w-6 lg:w-8"
        >
        <img
          :src="linkedInIcon"
          alt="linkedin"
          class="cursor-pointer sm:w-5 md:w-6 lg:w-8"
        >
        <img
          :src="youtubeIcon"
          alt="youtube"
          class="cursor-pointer sm:w-5 md:w-6 lg:w-8"
        >
        <img
          :src="tiktokIcon"
          alt="tiktok"
          class="cursor-pointer sm:w-5 md:w-6 lg:w-8"
        >
      </div>
    </div>
    <div class="bg-secondary sm:py-1 md:py-2.5">
      <p class="sm:text-sm md:text-base text-center text-white font-light capitalize font-mont tracking-wide">
        Copyright@ 2022, All rights Reserved.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import playStoreIcon from '../assets/play-store.png'
import appStoreIcon from '../assets/app-store.png'
import instaIcon from '../assets/instagram.svg'
import linkedInIcon from '../assets/linkedin.svg'
import youtubeIcon from '../assets/youtube.svg'
import tiktokIcon from '../assets/tiktok.svg'

export default defineComponent({
  components: {
  },
  data() {
    return {
      playStoreIcon,
      appStoreIcon,
      instaIcon,
      linkedInIcon,
      youtubeIcon,
      tiktokIcon,
    }
  },
})
</script>
