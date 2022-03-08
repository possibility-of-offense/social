<template>
  <!-- TODO add dropdown funcionality + show in dropdown users, search functionality -->
  <div class="search-wrapper flex p-relative" :style="styleObj">
    <div class="flex align-center search-wrapper__inner">
      <Icon v-if="logoB" class="white-svg" v-slot="slotProps">
        <router-link to="/">
          <svg
            viewBox="0 0 36 36"
            class="a8c37x1j ms05siws hwsy1cff b7h9ocf4"
            fill="url(#jsc_s_r)"
            height="40"
            width="40"
          >
            <defs>
              <linearGradient
                x1="50%"
                x2="50%"
                y1="97.0782153%"
                y2="0%"
                id="jsc_s_r"
              >
                <stop offset="0%" stop-color="#0062E0"></stop>
                <stop offset="100%" stop-color="#19AFFF"></stop>
              </linearGradient>
            </defs>
            <path
              d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"
            ></path>
            <path
              :class="slotProps.cls"
              class="p361ku9c"
              d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
            ></path></svg
        ></router-link>
      </Icon>
      <HeaderSearchWrapperForm
        @showD="handleShowDropdown"
      ></HeaderSearchWrapperForm>
    </div>

    <HeaderSearchWrapperDropdown
      v-if="showDropdown"
    ></HeaderSearchWrapperDropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

// Components
import Icon from "@/components/General/Icon.vue";
import HeaderSearchWrapperForm from "@/components/Header/HeaderSearchWrapperForm.vue";
import HeaderSearchWrapperDropdown from "@/components/Header/HeaderSearchWrapperDropdown.vue";

export default defineComponent({
  name: "HeaderSearchWrapper",
  components: {
    Icon,
    HeaderSearchWrapperForm,
    HeaderSearchWrapperDropdown,
  },
  props: {
    logoB: {
      type: Boolean,
    },
  },
  setup() {
    const styleObj = ref({
      transform: "translateY(-50%)",
      top: "50%",
      padding: "0 0 0 0",
      borderRadius: "0",
      boxShadow: "0",
    });

    // Dropdown
    const showDropdown = ref<true | false>(false);
    const handleShowDropdown = () => {
      styleObj.value = {
        transform: "none",
        top: "0",
        padding: "7px 0 0 0",
        borderRadius: "0 0 10px",
        boxShadow: " 3px 3px 10px 0.2px rgba(0, 0, 0, 0.3)",
      };

      showDropdown.value = !showDropdown.value;
    };

    return {
      showDropdown,
      handleShowDropdown,
      styleObj,
    };
  },
});
</script>

<style scoped lang="scss">
.search-wrapper {
  position: absolute;
  left: 0;
  flex-direction: column;
  width: 320px;
  cursor: pointer;

  overflow: hidden;

  & > div.search-wrapper__inner {
    padding-left: 10px;
  }

  &.show-search-wrapper {
    box-shadow: 3px 3px 10px 0.2px rgba(0, 0, 0, 0.3);
    border-radius: 0 0 10px;
  }
}
</style>
