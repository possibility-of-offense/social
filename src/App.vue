<template>
  <TheHeader :logo="true"></TheHeader>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";

// Components
import TheHeader from "@/components/TheHeader.vue";

export default defineComponent({
  components: { TheHeader },
  setup() {
    // LOGIC BACKUP CODE
    // const handleCloseDropdown = () => {
    //   nextTick(() => {
    //     // if (showDropdown.value) {
    //     //   showDropdown.value = false;
    //     // }
    //   });
    //   console.log(123);
    // };

    return {
      // handleCloseDropdown,
    };
  },
});
</script>

<style lang="scss"></style>
