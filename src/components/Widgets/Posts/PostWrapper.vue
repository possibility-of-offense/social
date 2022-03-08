<template>
  <div class="post-wrapper" v-if="Array.isArray(posts) && posts.length">
    <div v-for="(post, ind) in posts" :key="ind">
      <PostWrapperItem :post="post"> </PostWrapperItem>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { Post } from "@/types/types";

// Components
import PostWrapperItem from "@/components/Widgets/Posts/PostWrapperItem.vue";

export default defineComponent({
  name: "PostWrapper",
  components: { PostWrapperItem },
  props: {
    posts: {
      type: [Array, Number] as PropType<Array<Post>>,
      default: [],
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss"></style>
