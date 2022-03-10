<template>
  <div class="alert bs-2">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Alert",
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.alert {
  position: fixed;
  top: 0;
  left: 50%;
  background-color: #1b74e4;
  padding: 1rem;
  width: 50%;
  color: #fff;
  display: grid;
  place-content: center;
  border-radius: 0 0 6px 6px;
  z-index: 99999;
}
</style>
