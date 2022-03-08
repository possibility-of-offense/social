<template>
  <div class="friends-request__grid--item bs-1">
    <div class="friends-request__grid--item-image">
      <img :src="person.image" :alt="person.name" />
    </div>
    <div class="friends-request__grid--item-info">
      <h4 class="text-left">{{ person.name }}</h4>
      <br />
      <Button
        @click="handleAddFriend(person.name)"
        class="primary-btn"
        style="font-size: 14px"
        >Add friend</Button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { PersonRequestGrid } from "@/types/types";

// Components

import Button from "@/components/General/Button.vue";

export default defineComponent({
  name: "FriendsRequestGridItem",
  components: {
    Button,
  },
  props: {
    person: {
      type: Object as PropType<PersonRequestGrid>,
    },
  },
  setup(_, context) {
    // Add friend
    const handleAddFriend = (name) => {
      context.emit("emitRemoveFromRequest", name);
    };

    return {
      handleAddFriend,
    };
  },
});
</script>

<style lang="scss">
.friends-request__grid--item {
  border-radius: 6px;
  background-color: #fff;
  width: 200px;
  margin: 0 6px;

  &-image {
    padding-top: 120%;
    position: relative;

    img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &-info {
    padding: 16px;
  }
}
</style>
