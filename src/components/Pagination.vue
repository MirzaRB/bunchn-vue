<template>
  <div class="flex justify-between items-center flex-wrap">
    <p>Showing {{ limit }} of {{ currentPage }} Data</p>
    <div class="flex items-center">
      <Button
        title="Prev"
        type="secondary-bordered"
        :disabled="currentPage === 1"
        @on-press="$emit('on-press-prev')"
      />
      <div class="mx-3">
        <ButtonGroup
          :group="getButtonGroup"
          :active="currentPage"
          @on-press-page="$emit('on-press-page')"
        />
      </div>
      <Button
        title="Next"
        type="secondary-bordered"
        :disabled="currentPage === totalPages"
        @on-press="$emit('on-press-next')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Button from './Button.vue'
import ButtonGroup from './ButtonGroup.vue'

export default defineComponent({
  components: {
    Button,
    ButtonGroup,
  },
  props: {
    totalPages: {
      type: Number,
      required: true,
      default: 0,
    },
    currentPage: {
      type: Number,
      required: true,
      default: 1,
    },
    limit: {
      type: Number,
      required: true,
      default: 15,
    },
  },
  emits: ['on-press-prev' ,'on-press-next', 'on-press-page'],
  computed: {
    getButtonGroup() {
      return [this.currentPage, this.currentPage + 1, this.currentPage + 2]
    },
  },
})
</script>