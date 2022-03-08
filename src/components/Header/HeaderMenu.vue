<template>
  <div class="menu">
    <ul class="flex">
      <HeaderMenuItem
        class="flex justify-center"
        v-for="(v, i) in items"
        :key="i"
        :item="v"
      >
      </HeaderMenuItem>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { MenuItem } from "@/types/types";

// Components
import HeaderMenuItem from "@/components/Header/HeaderMenuItem.vue";

export default defineComponent({
  name: "HeaderMenu",
  components: { HeaderMenuItem },
  props: {
    items: {
      type: Array as PropType<Array<MenuItem>>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.menu {
  justify-self: center;
}
</style>
