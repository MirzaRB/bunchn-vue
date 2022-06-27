<template>
  <button
    :class="[
      buttonClasses,
      type === 'pill-bordered' ? pillBorderedClasses : '',
      type === 'secondary' ? secondaryClasses : '',
      type === 'primary-bordered' ? primaryBorderedClasses : '',
      extraClasses ? extraClasses : ''
    ]"
    @click="$emit('on-press')"
  >
    {{ title }}
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
      buttonClasses:
        'm-0 px-10 py-2 text-center border-solid',
      pillBorderedClasses: 'rounded-full border border-black font-bold text-lg',
      primaryBorderedClasses: 'rounded-lg bg-primary text-white text-base font-medium border border-white',
      secondaryClasses: 'rounded-lg bg-secondary text-white text-base font-medium',
    }
  },
})
</script>
