<template>
  <div class="post-wrapper__item bs-3">
    <div
      class="post-wrapper__item--header flex justify-space-between align-center"
    >
      <div class="flex align-center">
        <Image>
          <router-link to="/">
            <img src="../../../assets/ventsi.jpg" alt=""
          /></router-link>
        </Image>
        <div class="mood-wrapper">
          <h5>Ventsislav</h5>
        </div>
      </div>
      <div class="icon-wrapper hover-bg-gray-1">
        <!-- TODO add some dropdown funcionality -->
        <Icon>
          <svg
            viewBox="0 0 20 20"
            width="1.2em"
            height="1.2em"
            class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 py1f6qlh em6zcovv jnigpg78 odw8uiq3"
          >
            <g fill-rule="evenodd" transform="translate(-446 -350)">
              <path
                d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
              ></path>
            </g>
          </svg>
        </Icon>
      </div>
    </div>

    <div class="separator"></div>

    <PostWrapperItemBody
      :post="post"
      class="post-wrapper__item--body"
    ></PostWrapperItemBody>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Post } from "@/types/types";

// Components
import Image from "@/components/General/Image.vue";
import Icon from "@/components/General/Icon.vue";
import PostWrapperItemBody from "@/components/Widgets/Posts/PostWrapperItemBody.vue";

export default defineComponent({
  name: "PostWrapperItem",
  components: { Image, Icon, PostWrapperItemBody },
  props: {
    post: {
      type: Object as PropType<Post>,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.post-wrapper__item {
  background-color: #fff;
  border-radius: 7px;
  padding: 15px;
  margin: 1rem 0;

  &--header {
    & > div:first-child {
      user-select: none;
    }

    .mood-wrapper {
      margin-left: 6px;
    }

    img {
      border-radius: 50%;
      width: 35px;
    }

    h5 {
      margin-left: 6px;
    }

    .icon-wrapper {
      margin-left: auto;
      padding: 10px;
      border-radius: 50%;
      transition: transform 0.05s;
      cursor: pointer;

      &:active {
        box-shadow: 1px 1px 2px 0.4px rgba(0, 0, 0, 0.1);
        background-color: #e7f3ff !important;
        color: inherit;
      }
    }
  }
}
</style>
