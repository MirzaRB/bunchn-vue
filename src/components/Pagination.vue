<template>
  <div class="flex justify-between items-center flex-wrap">
    <p>Showing {{ limit }} of {{ currentPage }} Data</p>
    <div class="flex items-center">
      <Button title="Prev" type="secondary-bordered" @on-press="prev" />
      <div class="mx-3">
        <ButtonGroup v-bind:active="activeIndex" :group="getButtonGroup" />
      </div>
      <Button title="Next" type="secondary-bordered" @on-press="next" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Button from "./Button.vue";
import ButtonGroup from "./ButtonGroup.vue";

export default defineComponent({
  components: {
    Button,
    ButtonGroup,
  },
  props: {},
  data() {
    return {
      activeIndex: 0,
    };
  },
  emits: ['on-press-prev' ,'on-press-next', 'on-press-page'],
  computed: {
    getButtonGroup() {
      return ["1", "2", "3"];
    },
  },
  methods: {
    prev() {
      if (this.activeIndex > 0) {
        this.activeIndex = this.activeIndex - 1;
      }
    },
    next() {
      if (this.activeIndex < 2) {
        this.activeIndex = this.activeIndex + 1;
      }
    },
  },
});
</script>
