<template>
  <div>
    <h1>{{ id }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Friend",
  props: ["id"],
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
