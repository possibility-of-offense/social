<template>
  <div class="header-misc__profile">
    <router-link to="/" class="flex justify-center align-center">
      <Image>
        <img src="../../assets/ventsi.jpg" alt="" />
      </Image>
      <p>Венцислав</p>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Image from "@/components/General/Image.vue";

export default defineComponent({
  name: "HeaderMiscProfile",
  components: { Image },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.header-misc__profile {
  display: flex;
  align-items: center;

  transition: background-color 0.2s ease-out;
  cursor: pointer;

  overflow: hidden;

  a {
    flex-grow: 1;
    transition: transform 0.05s;
    border-radius: 25px;

    &:active {
      transform: scale(0.97);
      box-shadow: 1px 1px 2px 0.4px rgba(0, 0, 0, 0.1);
      background-color: #e7f3ff !important;
      color: inherit;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }

  img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
  }

  p {
    padding: 0 5px;
  }
}
</style>
