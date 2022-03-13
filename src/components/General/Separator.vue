<template>
  <div :class="[dark ? 'dark' : '']"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Separator",
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
div {
  border-top: 1px solid #e4e6eb;
  display: block;
  margin: 7px 0;
}
div.dark {
  border-top-color: rgba(85, 85, 85, 0.363);
}
</style>
