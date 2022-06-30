<template>
  <div class="bg-white flex items-between rounded-lg">
    <div
      v-for="(label, index) in group"
      :key="`button-${index + 1}`"
      :class="`px-5 py-3 cursor-pointer ${active === label ? 'bg-secondary text-white rounded-lg' : ''}`"
      @click="$emit('on-press-page', label)"
    >
      {{ label }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { globalState } from '../store'

export default defineComponent({
  props: {
    group: {
      type: Array as PropType<number[]>,
      required: true,
      default() {
        return []
      },
    },
    active: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  emits: ['on-press-page'],
  methods: {
    changePage(page: number) {
      globalState.paginationData.currentPage = page
    },
  },
})
</script>
