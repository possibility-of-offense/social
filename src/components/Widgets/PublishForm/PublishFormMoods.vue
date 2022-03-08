<template>
  <div>
    <ul v-if="moods.length">
      <li v-for="(v, i) in moods" :key="i" @click="handleEmitClickedIcon(v)">
        <a href="#">
          <img :src="getImageUrl(v.icon)" />

          <p>{{ v.name }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { MoodsIcons } from "@/types/types";
import { useStore } from "@/store/index";
import { RootActionEnums } from "@/store/action-enums";

export default defineComponent({
  name: "PublishFormMoods",
  props: {
    moods: {
      type: Array as PropType<Array<MoodsIcons>>,
      default: [],
    },
  },
  setup(_, context) {
    // Img url function
    const getImageUrl = (n: any) => {
      return require("../../../assets/" + n + ".png");
    };

    const store = useStore();
    // Emit custom event
    const handleEmitClickedIcon = (v: MoodsIcons) => {
      context.emit("clickedIcon");
      store.dispatch(RootActionEnums.SET_MOOD, v);
    };

    return {
      getImageUrl,
      handleEmitClickedIcon,
    };
  },
});
</script>

<style scoped></style>
