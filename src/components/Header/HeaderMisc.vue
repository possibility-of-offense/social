<template>
  <div class="header-misc flex justify-end align-center">
    <HeaderMiscProfile></HeaderMiscProfile>
    <HeaderMiscMessenger></HeaderMiscMessenger>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import HeaderMiscProfile from "@/components/Header/HeaderMiscProfile.vue";
import HeaderMiscMessenger from "@/components/Header/HeaderMiscMessenger.vue";

export default defineComponent({
  name: "HeaderMisc",
  components: {
    Image,
    HeaderMiscProfile,
    HeaderMiscMessenger,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.header-misc {
  margin-right: 15px;

  & > * {
    margin: 0 5px;
  }
}
</style>
