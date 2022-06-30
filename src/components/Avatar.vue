<template>
  <img
    :class="[avatarClass]"
    :src="src"
    alt="avatar"
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    components: {},
    props: {
        src: {
          type: String,
          required: true,
        },
        size: {
          type: String,
          required: true,
        },
    },
    data() {
        return {
          avatarClass: `${this.size === 'xl' && 'w-32 h-32'} ${this.size === 'lg' && 'w-24 h-24'} ${this.size === 'md' && 'w-15 h-15'} ${this.size === 'sm' && 'w-10 h-10'} rounded-full object-cover`,
        }
    },
})
</script>
