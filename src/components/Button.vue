<template>
  <button
    :class="[generateButtonClasses]"
    @click="$emit('on-press')"
  >
    {{ title }}
    <slot v-if="type==='table'" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    extraClasses: {
      type: String,
      required: false,
      default: '',
    },
  },
  emits: ['on-press'],
  data() {
    return {
      
      pillBorderedClasses: '',
      primaryBorderedClasses: '',
      tableBtnClasses: '',
      secondaryClasses: '',
      secondaryBorderedClasses: '',
    }
  },
  computed: {
    generateButtonClasses() {
      let buttonClasses =
        `m-0 text-center border-solid whitespace-nowrap ${this.extraClasses}`
      this.type === 'pill-bordered' 
      ? (buttonClasses += ' sm:px-2.5 sm:py-1 md:px-10 md:py-2 rounded-full border border-black sm:font-semibold md:font-bold sm:text-sm md:text-base lg:text-lg')
      : this.type === 'primary-bordered' 
      ? (buttonClasses += ' sm:px-2.5 sm:py-1 md:px-10 md:py-2 rounded-lg bg-primary text-white sm:text-sm md:text-base sm:font-light md:font-medium border border-white')
      : this.type === 'table' 
      ? (buttonClasses += ' rounded-md bg-iconBtn text-secondary border border-secondary')
      : this.type === 'secondary' 
      ? (buttonClasses += ' sm:px-2.5 sm:py-1 md:px-10 md:py-2 rounded-lg bg-secondary text-white sm:text-sm md:text-base sm:font-mont md:font-montBold')
      : this.type === 'secondary-bordered' 
      ? (buttonClasses += ' sm:px-2.5 sm:py-1 md:px-10 md:py-2 rounded-lg bg-white border border-secondary text-secondary sm:text-sm md:text-base sm:font-mont md:font-montBold')
        : buttonClasses
      return buttonClasses
    },
  },
})
</script>
