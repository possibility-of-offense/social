<template>
  <div class="bs-2 dropdown">
    <h3>Messenger</h3>
    <!-- TODO add searching funcionality (reuse the component from the logo search wrapper), add users and chats -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Dropdown",
  setup() {
    return {};
  },
});
</script>

<style scoped>
.dropdown {
  position: absolute;
  right: 0;
  top: 103%;
  width: 300px;
  max-width: 300px;
  background-color: #fff;
  padding: 1rem;
  border-radius: 10px;
}
</style>
