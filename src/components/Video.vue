<template>
  <div
    :class="videoClass"
    @click="isPlay ? $emit('on-pause') : $emit('on-play')"
  >
    <video
      ref="videoElement"
      class="w-full h-[100%] object-cover"
    >
      <source :src="videoSrc">
    </video>
    <button
      v-if="!isPlay"
      :class="btnClass"
    >
      <img
        :src="playIcon"
        class="w-full"
      >
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import playIcon from '../assets/play-btn.png'

export default defineComponent({
  components: {},
  props: {
    isPlay: {
      type: Boolean,
      default: false,
      required: true,
    },
    videoSrc:{
        type:String,
        default:'',
        required:true,
    },
  },
  emits: ['on-play', 'on-pause'],
  data() {
    return {
      playIcon,
      videoClass: 'w-full h-full relative',
      btnClass: 'w-24 absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 ',
    }
  },
  watch: {
    isPlay: function (isPlaying) {
      if (isPlaying) {
        this.$refs.videoElement.play()
      } else {
        this.$refs.videoElement.pause()
      }
    },
  },
})
</script>
