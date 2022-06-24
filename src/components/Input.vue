<template>
  <div class="w-full relative">
    <p
      v-if="label"
      class="bg-white text-base font-normal font-mont mb-neg-10px ml-3 relative max-w-fit px-3"
    >
      {{ label }}
    </p>
    <input
      :type="inputType"
      class="w-full border-2 border-input-border border-solid rounded-lg px-2.5 py-3 text-primary font-normal font-sm"
      @input="(event) => (value = e.target.value)"
    >
    <div
      v-if="iconVisibility"
      class="absolute right-3 top-1/2 translate-y-neg-1/2 mt-1.5"
    >
      <img
        class="w-4"
        :src="renderIcon"
        alt="icon"
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import userIcon from '../assets/user-icon.svg'
import passwordIcon from '../assets/password-icon.svg'

export default defineComponent({
  components: {},
  props: {
    label: {
      type: String,
      required: true,
    },
    inputType: {
      type: String,
      required: true,
    },
    disableIcon: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      value: '',
      userIcon,
      passwordIcon,
    }
  },
  computed: {
    renderIcon() {
      return this.inputType === 'text' || !this.inputType
        ? userIcon
        : passwordIcon
    },
    iconVisibility() {
        return this.disableIcon ? false : true
    },
  },
})
</script>
