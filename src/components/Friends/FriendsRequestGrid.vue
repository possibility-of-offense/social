<template>
  <div class="friends-request__grid" v-if="people.length">
    <FriendsRequestGridItem
      v-for="(person, ind) in people"
      :key="ind"
      :person="person"
      @emitRemoveFromRequest="handleRemoveFromRequest"
    ></FriendsRequestGridItem>
  </div>

  <template v-if="people.length">
    <br />
    <div class="separator"></div>
    <br />
  </template>

  <div class="friends-request__grid" v-if="friends.length">
    <h2>Your Friends:</h2>
    <FriendsRequestGridItem
      v-for="(person, ind) in friends"
      :key="ind"
      :person="person"
      @emitSeeFriend="handleSeeFriend(person)"
    ></FriendsRequestGridItem>
  </div>

  <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
    <Alert v-if="showAlert">{{ msg }}</Alert>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import gsap from "gsap";

import { RootActionEnums } from "@/store/action-enums";
import { PersonRequestGrid } from "@/types/types";
import { useStore } from "@/store/index";
import { useRouter } from "vue-router";

// Components
import FriendsRequestGridItem from "./FriendsRequestGridItem.vue";
import Alert from "@/components/General/Alert.vue";

export default defineComponent({
  name: "FriendsRequestGrid",
  components: { FriendsRequestGridItem, Alert },
  setup() {
    const store = useStore();
    const people = ref<Array<PersonRequestGrid>>([]);

    const friends = ref<Array<PersonRequestGrid>>([]);

    if (store.state.friends) {
      people.value = store.state.friends;
    }

    if (store.state.addedFriends) {
      friends.value = store.state.addedFriends;
    }

    // Alert data
    const msg = ref("");
    const showAlert = ref(false);

    const beforeEnter = (el: HTMLElement) => {
      el.style.transform = "translateY(-100px) translateX(-50%)";
      el.style.opacity = "0";
    };

    const enter = (el: HTMLElement, done: any) => {
      gsap.to(el, {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "back.out",
        onComplete: function () {
          done();
          setTimeout(() => {
            showAlert.value = false;
          }, 2000);
        },
      });
    };

    const leave = (el: HTMLElement, done: any) => {
      gsap.to(el, {
        duration: 1,
        opacity: 0,
        onComplete: done,
      });
    };

    // Add a friend
    const handleRemoveFromRequest = (name: PersonRequestGrid) => {
      if (name) {
        store.dispatch(RootActionEnums.REMOVE_FROM_FRIENDS, name.name);
        store.dispatch(RootActionEnums.ADDING_FRIENDS, {
          ...name,
          dateAdded: new Date().toString(),
        });
        msg.value = "The friend was added";
        showAlert.value = true;
      }
    };

    const router = useRouter();
    const handleSeeFriend = (p: PersonRequestGrid) => {
      router.push({ name: "Friend", params: { id: p.name } });
    };

    return {
      people,
      handleRemoveFromRequest,
      handleSeeFriend,
      beforeEnter,
      enter,
      leave,
      msg,
      showAlert,
      friends,
    };
  },
});
</script>

<style lang="scss">
.friends-request__grid {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  h2 {
    flex: 1 1 100%;
    font-weight: 500;
  }
}
</style>
