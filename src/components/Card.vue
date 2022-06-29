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
            radius: `${this.rRadius && 'rounded-r-large'} ${this.lRadius && 'rounded-l-large'}`,
            cardClass: 'w-full overflow-hidden shadow-card p-8 bg-white mx-auto',
        }
    },
})
</script>
