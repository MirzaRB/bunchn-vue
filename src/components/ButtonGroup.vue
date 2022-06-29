<template>
  <div class="bg-white flex items-between rounded-lg">
    <div
      v-for="(label, index) in group"
      :key="`button-${index + 1}`"
      :class="`px-5 py-3 cursor-pointer ${index === 0 ? 'bg-secondary text-white rounded-lg' : ''}`"
    >
      {{ label }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  components: {},
  props: {
    group: {
      type: Array as PropType<string[]>,
      required: true,
      default() {
        return []
      },
    },
  },
  emits: ['on-press'],
})
</script>
