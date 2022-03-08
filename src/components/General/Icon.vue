<template>
  <div class="grid-content-center">
    <slot v-bind:cls="$attrs.class"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Icon",
  inheritAttrs: false,
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
