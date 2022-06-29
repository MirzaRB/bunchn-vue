<template>
  <div class="flex items-center">
    <div class="mr-2">
      <Button
        title=""
        type="table"
        extra-classes="px-2 py-2 w-max"
      >
        Edit
      </Button>
    </div>
    <div>
      <Button
        title=""
        type="table"
        extra-classes="px-2 py-2 w-max"
      >
        Delete
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from './Button.vue'

export default defineComponent({
  components: {
    Button,
  },
})
</script>
