<template>
  <div class="flex justify-between items-center">
    <p>Showing 5 of 12 Data</p>
    <div class="flex items-center">
      <Button
        title="Prev"
        type="secondary-bordered"
      />
      <div class="mx-3">
        <ButtonGroup :group="getButtonGroup" />
      </div>
      <Button
        title="Next"
        type="secondary-bordered"
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
  },
  data() {
    return {
    }
  },
  computed: {
    getButtonGroup() {
        return ['1', '2', '3']
    },
  },
})
</script>