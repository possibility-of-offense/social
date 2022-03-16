<template>
  <div class="friend-details" v-if="getPerson">
    <FriendBanner :person="getPerson"></FriendBanner>
    <div class="friend-details__info">
      <div class="friend-details__info--inner">
        <PostWrapperItem
          v-for="(p, i) in getPerson.posts"
          :key="i"
          :post="p"
          :person="personObject"
        ></PostWrapperItem>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRef } from "vue";
import { useStore } from "@/store/index";

// Components
import FriendBanner from "@/components/Friend/FriendBanner.vue";
import PostWrapperItem from "@/components/Widgets/Posts/PostWrapperItem.vue";
import Separator from "@/components/General/Separator.vue";

export default defineComponent({
  name: "Friend",
  props: ["id"],
  components: {
    Image,
    Separator,
    FriendBanner,
    PostWrapperItem,
  },
  setup(props) {
    const store = useStore();
    const propRef = toRef(props, "id");
    const getPerson = computed(() => {
      return store.state.friendsDetails[propRef.value.toLowerCase()];
    });

    const personObject = reactive({
      name: getPerson.value.name,
      image: getPerson.value.image,
      id: propRef.value,
    });

    return {
      getPerson,
      personObject,
    };
  },
});
</script>

<style lang="scss">
.friend-details {
  &__info {
    background-color: #fff;
    box-shadow: inset 0px 2px 4px 0.2px rgb(0 0 0 / 30%);
    padding: 1rem 0;

    &--inner {
      width: 50%;
      margin: 0 auto;
    }
  }
}
</style>
