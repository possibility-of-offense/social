<template>
  <div class="home">
    <!-- TODO Add the commented div -->
    <!-- <div
      class="add-todo hover-bg-gray-1 bs-3"
      style="width: 50px; height: 50px"
    ></div> -->
    <PublishForm></PublishForm>

    <div class="separator"></div>

    <PostWrapper :posts="getPosts"> </PostWrapper>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { useStore } from "@/store/index";

// Components
import PublishForm from "@/components/Widgets/PublishForm/PublishForm.vue";
import PostWrapper from "@/components/Widgets/Posts/PostWrapper.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    PublishForm,
    PostWrapper,
  },
  setup() {
    const store = useStore();
    const getPosts = computed(() => {
      return store.state.posts.length && store.state.posts;
    });

    return {
      getPosts,
    };
  },
});
</script>

<style lang="scss">
.home {
  text-align: center;
  padding: 0.6rem;

  width: 600px;
  margin: 1rem auto;

  .add-todo {
    width: 15%;
    margin: 1rem auto;
    padding: 1rem;
    border-radius: 5px;
  }
}
</style>
