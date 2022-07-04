<template>
  <div class="flex justify-between items-center flex-wrap">
    <p>Showing {{ limit }} of {{ currentPage }} Data</p>
    <div class="flex items-center">
      <Button
        title="Prev"
        type="secondary-bordered"
        @on-press="prev"
      />
      <div class="mx-3">
        <ButtonGroup
          :active="getActiveIndex"
          :group="getButtonGroup"
        />
      </div>
      <Button
        title="Next"
        type="secondary-bordered"
        @on-press="next"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { globalState } from '../store'

import Button from './Button.vue'
import ButtonGroup from './ButtonGroup.vue'

export default defineComponent({
  components: {
    Button,
    ButtonGroup,
  },
  props: {},
  emits: ['on-press-prev', 'on-press-next', 'on-press-page'],
  data() {
    return {
      limit: globalState.paginationData.limit,
      currentPage: globalState.paginationData.currentPage,
    }
  },
  computed: {
    getButtonGroup() {
      return ['1', '2', '3']
    },
    getActiveIndex() {
      let active = globalState.paginationData.currentPage
      return active
    },
  },
  methods: {
    prev() {
      if (globalState.paginationData.currentPage > 1) {
        globalState.paginationData.currentPage--
      }
    },
    next() {
      if (globalState.paginationData.currentPage < 3) {
        globalState.paginationData.currentPage++
      }
    },
  },
})
</script>
