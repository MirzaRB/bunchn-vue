<template>
  <div :class="fontSize">
    {{ title }}
    <div :class="borderClass" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
  },
  data() {
    return {
      fontSize: 'text-2xl md:text-3xl font-montBold ',
      borderClass: 'border-t-4 border-solid border-secondary rounded w-16 mt-3 ',
    }
  },
})
</script>
