<template>
  <div class="friends">
    <h1>Friends Request</h1>
    <br />
    <FriendsRequestGrid></FriendsRequestGrid>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import FriendsRequestGrid from "@/components/Friends/FriendsRequestGrid.vue";

export default defineComponent({
  name: "Friends",
  components: { FriendsRequestGrid },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.friends {
  text-align: center;
  padding: 1rem;
  margin-top: 1.5rem;

  h1 {
    font-size: 1.1rem;
    font-weight: 500;
  }
}
</style>
