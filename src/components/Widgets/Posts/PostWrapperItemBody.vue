<template>
  <div>
    <img class="mood-icon" :src="getImageUrl(post.mood.icon)" />
    <p>
      {{ post.name }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { Post } from "@/types/types";

export default defineComponent({
  name: "PostWrapperItemBody",
  props: {
    post: {
      type: Object as PropType<Post>,
    },
  },
  setup() {
    const getImageUrl = (n: any) => {
      return require("../../../assets/" + n + ".png");
    };
    return {
      getImageUrl,
    };
  },
});
</script>

<style lang="scss">
.post-wrapper__item--body {
  text-align: left;
  line-height: 1.4;
  font-size: 14px;

  img.mood-icon {
    width: 20px;
  }
  p {
    margin-top: 10px;
  }
}
</style>
