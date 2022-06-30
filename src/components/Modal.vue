<template>
  <div>
    <vue-final-modal
      v-model="isVisible"
      classes="modal-container"
      :content-class="[modal-content,widthClass]"
      @closed="$emit('on-close')"
      @click-outside="$emit('on-close')"
    >
      <div :class="[modal__content, tailwind__content]">
        <Card 
          :r-radius="false"
          :l-radius="false"
          class="p-12"
        >
          <slot />
        </Card>
      </div>
    </vue-final-modal>
  </div>
</template>
<script>
import { VueFinalModal } from 'vue-final-modal'
import Card from './Card.vue'
export default {
  components: {
    VueFinalModal,
    Card,
  },
  props: {
    show: Boolean,
    isSmall: Boolean,
  },
  emits: ['on-close'],
  data() {
    return {
      isVisible: false,
      modal__content: 'modal__content',
      tailwind__content: 'rounded-3xl w-full',
      widthClass: `${this.isSmall ? 'w-4/5 md:w-3/5 lg:w-2/6' : 'w-4/5 md:w-3/5 lg:w-3/4'}`,
    }
  },
  watch: {
    // whenever show prop changes, this function will run
    show(value) {
      this.isVisible = value
    },
  },
}
</script>
<style scoped>
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 90%;
  margin: 0 1rem;
  padding: 1rem;
  border-radius: 1.5rem;
}
.modal__content {
  flex-grow: 1;
  overflow-y: auto;
}
</style>