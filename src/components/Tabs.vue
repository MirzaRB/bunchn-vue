<template>
  <div class="w-full">
    <div class="flex items-center flex-wrap">
      <div
        v-for="tab in tabs"
        :key="tab"
        class="mr-3"
      >
        <Button
          :title="tab"
          :type="getActiveTab === tab ? 'secondary' : 'secondary-bordered'"
          extra-classes="rounded"
          @on-press="$emit('on-press-tab', tab)"
        />
      </div>
    </div> 
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { PropType } from 'vue'

import Button from './Button.vue'

export default defineComponent({
  components: {
    Button,
  },
  props: {
    tabs: {
        type: Array as PropType<string[]> | PropType<[]>,
        required: true,
        default() {
          return []
        },
    },
    active: {
        type: String,
        required: true,
        default: '',
    },
  },
  emits: ['on-press-tab'],
  computed: {
    getActiveTab() {
        return this.active
    },
  },
  watch: {
    active(activetab) {
      console.log('activetab', activetab)
    },
  },
})
</script>