<template>
  <div class="bg-white flex items-between rounded-lg">
    <div
      v-for="(label, index) in group"
      :key="`button-${index + 1}`"
      :class="`px-5 py-3 cursor-pointer ${activeIndex === index + 1 ? 'bg-secondary text-white rounded-lg' : ''}`"
      @click="changeIndex(index + 1)"
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
      type: Array as PropType<string[]>,
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
  emits: ['on-press'],
  data(){
    return {
      activeIndex: this.active,
    }
  },
  watch: {
    active(index) {
      this.activeIndex = index
    },
  },
  methods:{
    changeIndex(recIndex : any){
      this.activeIndex = recIndex
      globalState.paginationData.currentPage = recIndex
    },
  },
})
</script>
