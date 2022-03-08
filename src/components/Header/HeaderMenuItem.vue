<template>
  <li class="menu-item" :class="{ active: checkCurrentRoute }">
    <Icon>
      <router-link :to="{ name: item?.link }">
        <div v-html="item?.icon"></div>
      </router-link>
    </Icon>
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { MenuItem } from "@/types/types";
import { useRoute } from "vue-router";

// Components
import Icon from "@/components/General/Icon.vue";

export default defineComponent({
  name: "HeaderMenuItem",
  components: { Icon },
  props: {
    item: {
      type: Object as PropType<MenuItem>,
    },
  },
  setup(props) {
    const route = useRoute();

    // Check current route
    const checkCurrentRoute = computed(() => {
      if (route.name === props.item!.name.toLowerCase()) {
        return true;
      }
    });
    return {
      checkCurrentRoute,
    };
  },
});
</script>

<style lang="scss">
li.menu-item {
  cursor: pointer;

  a {
    position: relative;
    transition: background-color 0.3s ease-out;
    padding: 10px 15px;
    border-radius: 12px;
    margin: 6px;
    width: 120px;
    max-width: 120px;
    display: flex;
    justify-content: center;
  }

  &.active {
    a {
      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: calc(100% + 6px / 2);
        width: 100%;
        height: 3.5px;
        background-color: #1b74e4;
        border-radius: 1.5px;
      }
    }

    svg {
      fill: #1b74e4;
    }
  }
  &:not(.active) a:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
}
</style>
