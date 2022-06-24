<template>
  <div :class="[cardClass, radius]">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    components: {},
    props: {
        rRadius: Boolean,
        lRadius: Boolean,
    },
    data() {
        return {
            radius: `${this.rRadius && 'rounded-r-3xl'} ${this.lRadius && 'rounded-l-3xl'}`,
            cardClass: 'w-1/2 overflow-hidden shadow-card p-8 bg-white mx-auto',
        }
    },
})
</script>
