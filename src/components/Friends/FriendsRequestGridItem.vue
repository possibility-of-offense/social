<template>
  <div class="friends-request__grid--item bs-1" v-if="person">
    <div class="friends-request__grid--item-image">
      <img :src="person.image" :alt="person.name" />
    </div>
    <div class="friends-request__grid--item-info">
      <h4 class="text-left">{{ person.name }}</h4>
      <p v-if="person.dateAdded">Added on {{ formatedDate }}</p>
      <br />
      <Button
        v-if="!person.dateAdded"
        @click="handleAddFriend(person)"
        class="primary-btn"
        style="font-size: 14px"
        >Add person</Button
      >

      <Button
        v-if="!person.dateAdded"
        @click="handleSeePerson(person)"
        class="secondary-btn bs-3"
        style="font-size: 14px; margin-top: 10px"
        >See Person</Button
      >

      <Button
        v-if="person.dateAdded"
        @click="handleSeeFriend(person)"
        class="primary-btn"
        style="font-size: 14px"
        >See friend</Button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRef } from "vue";
import { useRouter } from "vue-router";

import { FriendsGrid } from "@/types/types";

// Components

import Button from "@/components/General/Button.vue";

export default defineComponent({
  name: "FriendsRequestGridItem",
  components: {
    Button,
  },
  props: {
    person: {
      type: Object as PropType<FriendsGrid>,
    },
  },
  setup(props, context) {
    const propRef = toRef(props, "person");

    // Add friend
    const handleAddFriend = (person: FriendsGrid | undefined) => {
      if (person) {
        context.emit("emitRemoveFromRequest", person);
      }
    };

    // Add friend
    const handleSeeFriend = (person: FriendsGrid | undefined) => {
      if (person) {
        context.emit("emitSeeFriend", person);
      }
    };

    // See person
    const router = useRouter();
    const handleSeePerson = (person: FriendsGrid | undefined) => {
      if (person) {
        router.push({
          name: "Friend",
          params: { id: person.name.split(" ")[0].toLowerCase() },
        });
      }
    };

    const formatedDate = computed(() => {
      if (propRef.value && propRef.value.dateAdded) {
        const d = new Date(propRef.value.dateAdded);
        return `${d.toDateString()}`;
      }
    });

    return {
      handleAddFriend,
      handleSeeFriend,
      handleSeePerson,
      formatedDate,
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

    h4 {
      & + p {
        font-size: 11px;
        text-align: left;
      }
    }
  }
}
</style>
