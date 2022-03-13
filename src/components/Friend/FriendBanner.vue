<template>
  <div class="friend-details__banner">
    <div class="friend-details__banner--inner">
      <div
        class="bs-2"
        :style="{ backgroundImage: `url(${person.bannerImage})` }"
      ></div>
      <br />
      <div class="image-wrapper">
        <Image class="image">
          <img class="bs-2" :src="person.image" :alt="person.name" />
        </Image>
        <div class="name">
          <h2>{{ person.name }}</h2>
        </div>

        <div class="actions">
          <Button class="primary-btn" style="font-size: 14px; margin: 6px 0"
            ><span style="font-weight: 300"> Job:</span>
            {{ person.job }}</Button
          >
          <Button
            class="secondary-btn bs-1"
            style="font-size: 14px; margin: 6px 0"
            >Posts: {{ person.posts.length }}</Button
          >
        </div>
      </div>
      <br />
      <Separator :dark="true"></Separator>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Image from "@/components/General/Image.vue";
import Button from "@/components/General/Button.vue";
import Separator from "@/components/General/Separator.vue";

export default defineComponent({
  name: "FriendBanner",
  props: {
    person: {
      type: Object,
    },
  },
  components: {
    Image,
    Button,
    Separator,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.friend-details__banner {
  background-image: linear-gradient(
    to top,
    #f4f4f4,
    rgba(255, 255, 255.9),
    rgba(255, 255, 255, 0.7),
    rgba(27, 116, 228, 0.1),
    rgba(27, 116, 228, 0.2)
  );
  &--inner {
    width: 60%;
    margin: 0 auto;
    padding-bottom: 15px;

    & > div.bs-2:first-child {
      padding-top: 47.25%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      border-radius: 0 0 5px 5px;
    }

    .image-wrapper {
      display: flex;
      align-items: center;

      div.image {
        img {
          display: block;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          border: 1px solid #ddd;
        }
      }
    }
    .name {
      margin-left: 15px;
      font-size: 1.3rem;
    }
    .actions {
      height: 100%;
      margin-left: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      & * {
        cursor: initial;
        text-align: center;
      }
    }
  }
}
</style>
