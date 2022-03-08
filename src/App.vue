<template>
  <TheHeader :logo="true"></TheHeader>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";

// Components
import TheHeader from "@/components/TheHeader.vue";

export default defineComponent({
  components: { TheHeader },
  setup() {},
});
</script>

<style lang="scss"></style>
