<template>
  <div class="friends-request__grid" v-if="people.length">
    <FriendsRequestGridItem
      v-for="(person, ind) in people"
      :key="ind"
      :person="person"
      @emitRemoveFromRequest="handleRemoveFromRequest"
    ></FriendsRequestGridItem>
  </div>
  <div v-else>You don't have friends</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { PersonRequestGrid } from "@/types/types";

// Components
import FriendsRequestGridItem from "./FriendsRequestGridItem.vue";

export default defineComponent({
  name: "FriendsRequestGrid",
  components: { FriendsRequestGridItem },
  setup() {
    const people = ref<Array<PersonRequestGrid>>([
      {
        name: "Gosho",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      },
      {
        name: "Nikolai",
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      },
      {
        name: "Mihaela",
        image:
          "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        name: "Nikolina",
        image:
          "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
      },
      {
        name: "Jore Gyzo",
        image:
          "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        name: "Momata kyde predlojila na Chingata, kogato e bil v Smolqn, da q navesti u Karlovo",
        image:
          "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
      },
    ]);

    const handleRemoveFromRequest = (name) => {
      const ind = people.value.findIndex((el) => el.name === name);
      people.value.splice(ind, 1);
    };

    return {
      people,
      handleRemoveFromRequest,
    };
  },
});
</script>

<style lang="scss">
.friends-request__grid {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}
</style>
