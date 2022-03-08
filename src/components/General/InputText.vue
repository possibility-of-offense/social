<template>
  <div v-if="obj">
    <label :style="{ display: obj.showLabel ? '' : 'none' }" :for="obj.id">{{
      obj.label
    }}</label>
    <input
      type="text"
      autocomplete="off"
      :placeholder="obj.placeholder"
      :id="obj.id"
      :class="obj.class"
      v-bind="$attrs"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { InputGeneral } from "@/types/types";

export default defineComponent({
  name: "InputG",
  inheritAttrs: false,
  props: {
    obj: {
      type: Object as PropType<InputGeneral | undefined>,
      default: {},
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
