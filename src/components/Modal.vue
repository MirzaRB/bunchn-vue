<template>
  <div>
    <vue-final-modal
      v-model="show"
      classes="modal-container"
      content-class="modal-content"
      @closed="onclose"
      @click-outside="onclose"
    >
      <div :class="[modal__content, tailwind__content]">
        <Card
          :r-radius="false"
          :l-radius="false"
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
    onclose: { type: Function, default: () => ({}) },
  },
  data() {
    return {
      modal__content: 'modal__content',
      tailwind__content: `rounded-3xl ${this.isSmall ? 'w-2/6' : 'w-3/4'}`,
    }
  },
}
</script>
<style scoped>
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 50px; */
}
::v-deep .modal-content {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 70%;
  margin: 0 1rem;
  padding: 1rem;
  border-radius: 1.5rem;
}
.modal__content {
  flex-grow: 1;
  overflow-y: auto;
}
</style>