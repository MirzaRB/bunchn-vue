<template>
    <img :class="[avatarClass]" :src="src" alt="">
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    components: {},
    props: {
        src: String,
        size: String,
    },
    data() {
        return {
            avatarClass: `${this.size === 'lg' && 'w-24 h-24'} ${this.size === 'md' && 'w-15 h-15'} ${this.size === 'sm' && 'w-10 h-10'} rounded-full`,
        }
    },
})
</script>
