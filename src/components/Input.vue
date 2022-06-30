<template>
  <div
    class="w-full relative"
    @click="$emit('on-click-input')"
  >
    <p
      v-if="label"
      class="bg-white text-base font-mont font-normal mb-neg-10px ml-3 relative max-w-fit px-3"
    >
      {{ label }}
    </p>
    <input
      v-if="inputType !== 'text-area'"
      :type="inputType"
      :placeholder="placeHolder"
      class="w-full border-2 border-input-border border-solid rounded-lg pl-5 pr-10 py-3 text-primary font-normal font-sm"
    >
    <textarea
      v-else
      rows="3"
      :placeholder="placeHolder"
      class="w-full border-2 border-input-border border-solid rounded-lg pl-5 pr-10 py-3 text-primary font-normal font-sm"
    />
    <div
      v-if="iconVisibility"
      :class="`absolute right-3 ${inputType !== 'text-area' ? 'top-1/2 translate-y-neg-1/2' : 'top-5'} mt-1.5`"
    >
      <img
        class="w-4"
        :src="iconSrc"
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
    placeHolder: {
      type: String,
      required: false,
      default: '',
    },
    disableIcon: {
      type: Boolean,
      required: false,
      default: false,
    },
    iconSrc:{
      type:String,
      required:false,
      default:'',
    },
  },
  emits: ['on-click-input'],
  data() {
    return {
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
