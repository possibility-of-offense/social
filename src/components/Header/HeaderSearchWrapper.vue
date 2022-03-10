<template>
  <div class="search-wrapper flex p-relative" @click="handleShowDropdown">
    <div class="flex align-center search-wrapper__inner">
      <HeaderSearchWrapperForm></HeaderSearchWrapperForm>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

// Components
import HeaderSearchWrapperForm from "@/components/Header/HeaderSearchWrapperForm.vue";
import HeaderSearchWrapperDropdown from "@/components/Header/HeaderSearchWrapperDropdown.vue";

export default defineComponent({
  name: "HeaderSearchWrapper",
  components: {
    HeaderSearchWrapperForm,
    HeaderSearchWrapperDropdown,
  },
  props: {
    logoB: {
      type: Boolean,
    },
  },
  setup() {
    // Dropdown
    const showDropdown = ref<true | false>(false);
    const handleShowDropdown = () => {
      if (showDropdown.value) {
        showDropdown.value = false;
      } else {
        showDropdown.value = true;
      }
    };

    return {
      showDropdown,
      handleShowDropdown,
    };
  },
});
</script>

<style scoped lang="scss">
.search-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & > div.search-wrapper__inner {
    padding-left: 10px;
  }

  &.show-search-wrapper {
    box-shadow: 3px 3px 10px 0.2px rgba(0, 0, 0, 0.3);
    border-radius: 0 0 10px;
  }
}
</style>
