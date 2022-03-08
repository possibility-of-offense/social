<template>
  <div class="modal" @click.self="handleCloseModal">
    <div :style="styles" class="modal__inner">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { ModalStyles } from "@/types/types";

export default defineComponent({
  name: "Modal",
  props: {
    styles: {
      type: Object as PropType<ModalStyles | undefined>,
    },
  },
  setup(_, context) {
    const handleCloseModal = () => {
      context.emit("closeModal");
    };
    return {
      handleCloseModal,
    };
  },
});
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(244, 244, 244, 0.8);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;

  &__inner {
    max-width: 100%;
  }
}
</style>
