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
      fontSize: 'text-4xl font-bold ',
      borderClass: 'border-2 border-solid border-secondary rounded w-16 mt-3 ',
    }
  },
})
</script>
