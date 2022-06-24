<template>
  <button
    :class="[
      buttonClasses,
      type === 'pill-bordered' ? pillBorderedClasses : '',
      type === 'fill-rounded' ? fillRoundedClasses : '',
    ]"
    @click="$emit('on-press')"
  >
    <img v-if="icon ? true : false" :src="icon" />
    {{ title }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    icon: {
      type: HTMLImageElement,
      required: false,
    },
  },
  emits: ["on-press"],
  data() {
    return {
      buttonClasses:
        "flex items-center m-0 px-10 py-2 text-lg text-center font-bold",
      pillBorderedClasses: "rounded-full border border-black border-solid",
      fillRoundedClasses: "rounded-lg",
    };
  },
});
</script>
