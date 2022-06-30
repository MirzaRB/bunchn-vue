<template>
  <div class="flex items-center">
    <div class="mr-2">
      <Button
        title=""
        type="table"
        extra-classes="px-2 py-2 w-max"
      >
        <img
          :src="editIcon"
          class="w-6 h-6"
        >
      </Button>
    </div>
    <div>
      <Button
        title=""
        type="table"
        extra-classes="px-2 py-2 w-max"
      >
        <img
          :src="deleteIcon"
          class="w-6 h-6"
        >
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from './Button.vue'

import editIcon from '../assets/edit-icon.svg'
import deleteIcon from '../assets/delete-icon.svg'

export default defineComponent({
  components: {
    Button,
  },
  data() {
    return {
      editIcon,
      deleteIcon,
    }
  },
})
</script>
