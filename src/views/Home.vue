<template>
  <div class="max-w-none min-h-screen min-w-full">
    <div class="h-screen min-h-half bg-hero-background bg-no-repeat bg-cover">
      <div class="w-full max-w-screen-md mx-auto absolute left-2/4 bottom-2/4 video-container">
        <iframe
          width="100%"
          height="470"
          src="https://www.youtube.com/embed/nqye02H_H6I?controls=0"
        />
      </div>
    </div>
    <div class="max-w-screen-md mx-auto py-16">
      <p class="font-mont text-center text-6xl font-normal">
        We bring the
        <span class="font-semibold text-secondary"> social </span>
        to social media
      </p>
    </div>
    <div class="flex justify-center items-center pb-16">
      <div class="mr-3 ">
        <img
          :src="playStoreIcon"
          alt="play-store"
          class="rounded-xl shadow-2xl shadow-black max-w-xs cursor-pointer"
        >
      </div>
      <div class="ml-3">
        <img
          :src="appStoreIcon"
          alt="app-store"
          class="rounded-xl shadow-2xl shadow-black max-w-xs cursor-pointer"
        >
      </div>
    </div>
    <div class="bg-grey py-12">
      <div class="max-w-screen-sm mx-auto pb-8 flex justify-between">
        <router-link
          to="/"
          class="text-primary font-medium text-xl"
        >
          Privacy Policy
        </router-link>
        <router-link
          to="/"
          class="text-primary font-medium text-xl"
        >
          Terms
        </router-link>
        <router-link
          to="/"
          class="text-primary font-medium text-xl"
        >
          Contact Us
        </router-link>
      </div>
      <div class="max-w-sm mx-auto flex justify-around">
        <img
          :src="instaIcon"
          alt="instagram"
          class="cursor-pointer w-8"
        >
        <img
          :src="linkedInIcon"
          alt="linkedin"
          class="cursor-pointer w-8"
        >
        <img
          :src="youtubeIcon"
          alt="youtube"
          class="cursor-pointer w-8"
        >
        <img
          :src="tiktokIcon"
          alt="tiktok"
          class="cursor-pointer w-8"
        >
      </div>
    </div>
    <div class="bg-secondary py-2.5">
      <p class="text-base text-center text-white font-light capitalize font-mont tracking-wide">
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

<style scoped>
  .video-container {
    transform: translateX(-50%);
  }
</style>