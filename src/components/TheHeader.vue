<template>
  <header class="bs-1">
    <div class="flex align-center" ref="mainDiv">
      <!-- REFACTOR fix the positioning -->
      <Icon>
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
              class="p361ku9c white-svg"
              d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
            ></path></svg
        ></router-link>
      </Icon>
      <HeaderSearchWrapper
        v-clicked-outside="handleCloseDropdown"
        :logoB="logo"
        @click="showDropdown = !showDropdown"
      ></HeaderSearchWrapper>
      <div class="dr" v-if="showDropdown">
        <HeaderSearchWrapperDropdown
          :friends="friends"
        ></HeaderSearchWrapperDropdown>
      </div>
    </div>

    <p class="filler">Filler</p>
    <HeaderMenu :items="menuItems"></HeaderMenu>
    <HeaderMisc></HeaderMisc>
  </header>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref, watchEffect } from "vue";

import { MenuItem, PersonRequestGrid } from "@/types/types";

import { useStore } from "@/store/index";

// Components
import HeaderSearchWrapper from "@/components/Header/HeaderSearchWrapper.vue";
import HeaderMenu from "@/components/Header/HeaderMenu.vue";
import HeaderMisc from "@/components/Header/HeaderMisc.vue";
import HeaderSearchWrapperDropdown from "@/components/Header/HeaderSearchWrapperDropdown.vue";

export default defineComponent({
  components: {
    HeaderSearchWrapper,
    HeaderMenu,
    HeaderMisc,
    HeaderSearchWrapperDropdown,
  },
  props: {
    logo: {
      type: Boolean,
    },
  },
  setup() {
    const menuItems = ref<Array<MenuItem | any[]>>([
      {
        name: "Home",
        link: "home",
        icon: `<svg
            viewBox="0 0 28 28"
            class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 g28tu32o aaxa7vy3"
            height="28"
            width="28"
          >
            <path
              d="M25.825 12.29C25.824 12.289 25.823 12.288 25.821 12.286L15.027 2.937C14.752 2.675 14.392 2.527 13.989 2.521 13.608 2.527 13.248 2.675 13.001 2.912L2.175 12.29C1.756 12.658 1.629 13.245 1.868 13.759 2.079 14.215 2.567 14.479 3.069 14.479L5 14.479 5 23.729C5 24.695 5.784 25.479 6.75 25.479L11 25.479C11.552 25.479 12 25.031 12 24.479L12 18.309C12 18.126 12.148 17.979 12.33 17.979L15.67 17.979C15.852 17.979 16 18.126 16 18.309L16 24.479C16 25.031 16.448 25.479 17 25.479L21.25 25.479C22.217 25.479 23 24.695 23 23.729L23 14.479 24.931 14.479C25.433 14.479 25.921 14.215 26.132 13.759 26.371 13.245 26.244 12.658 25.825 12.29"
            ></path>
          </svg>`,
      },
      {
        name: "Friends",
        link: "friends",
        icon: `<svg viewBox="0 0 28 28" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 py1f6qlh em6zcovv" height="28" width="28"><path d="M10.5 4.5c-2.272 0-2.75 1.768-2.75 3.25C7.75 9.542 8.983 11 10.5 11s2.75-1.458 2.75-3.25c0-1.482-.478-3.25-2.75-3.25zm0 8c-2.344 0-4.25-2.131-4.25-4.75C6.25 4.776 7.839 3 10.5 3s4.25 1.776 4.25 4.75c0 2.619-1.906 4.75-4.25 4.75zm9.5-6c-1.41 0-2.125.841-2.125 2.5 0 1.378.953 2.5 2.125 2.5 1.172 0 2.125-1.122 2.125-2.5 0-1.659-.715-2.5-2.125-2.5zm0 6.5c-1.999 0-3.625-1.794-3.625-4 0-2.467 1.389-4 3.625-4 2.236 0 3.625 1.533 3.625 4 0 2.206-1.626 4-3.625 4zm4.622 8a.887.887 0 00.878-.894c0-2.54-2.043-4.606-4.555-4.606h-1.86c-.643 0-1.265.148-1.844.413a6.226 6.226 0 011.76 4.336V21h5.621zm-7.122.562v-1.313a4.755 4.755 0 00-4.749-4.749H8.25A4.755 4.755 0 003.5 20.249v1.313c0 .518.421.938.937.938h12.125c.517 0 .938-.42.938-.938zM20.945 14C24.285 14 27 16.739 27 20.106a2.388 2.388 0 01-2.378 2.394h-5.81a2.44 2.44 0 01-2.25 1.5H4.437A2.44 2.44 0 012 21.562v-1.313A6.256 6.256 0 018.25 14h4.501a6.2 6.2 0 013.218.902A5.932 5.932 0 0119.084 14h1.861z"></path></svg>`,
      },
    ]);

    const showDropdown = ref(false);
    const mainDiv = ref<HTMLElement | null>(null);

    const store = useStore();
    const friends = ref<Array<PersonRequestGrid>>([]);

    watchEffect(
      () => {
        if (showDropdown.value) {
          mainDiv.value!.classList.add("show-main-div");
          friends.value = store.state.addedFriends;
        } else {
          mainDiv.value!.classList.remove("show-main-div");
        }
      },
      {
        flush: "post",
      }
    );

    const handleCloseDropdown = () => {
      nextTick(() => {
        if (showDropdown.value) {
          mainDiv.value!.classList.remove("show-main-div");
          showDropdown.value = false;
        }
      });
    };

    return {
      menuItems,
      showDropdown,
      mainDiv,
      friends,
      handleCloseDropdown,
    };
  },
});
</script>

<style lang="scss" scoped>
header {
  position: relative;
  background-color: #fff;
  display: grid;
  grid-template-columns: 25% 50% 25%;
  align-items: center;

  &.bs-1 > div:first-child {
    padding: 10px;

    position: absolute;
    z-index: 9999;
    left: 0;
    top: 50%;
    // top: 0;
    border-radius: 0 0 6px;
    transform: translateY(-50%);
    width: 320px;
    cursor: pointer;

    background-color: #fff;

    display: grid;
    grid-template-columns: auto 1fr;

    &.show-main-div {
      top: 0;
      transform: none;
      box-shadow: 3px 3px 10px 0.2px rgba(0, 0, 0, 0.3);
      border-radius: 0 0 10px;
    }

    .dr {
      grid-column: 1 / -1;
    }

    // overflow: hidden;
  }

  p.filler {
    pointer-events: none;
    opacity: 0;
    z-index: -9999;
  }
}
</style>
