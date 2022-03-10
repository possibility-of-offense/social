<template>
  <div class="dropdown">
    <template v-if="friends && friends.length">
      <h3>Your friends</h3>
      <div v-for="(friend, ind) in friends" :key="ind" class="dropdown--item">
        <router-link :to="{ name: 'Friend', params: { id: friend.name } }">
          <div class="image">
            <div>
              <img :src="friend.image" alt="" />
            </div>
          </div>
          <h5>{{ friend.name }}</h5>
        </router-link>
      </div>
    </template>
    <template v-else>
      <p>No one likes you ;(</p>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { PersonRequestGrid } from "@/types/types";

export default defineComponent({
  props: {
    friends: {
      type: Array as PropType<PersonRequestGrid[]>,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.dropdown {
  background-color: #fff;
  padding: 15px 0 0;
  overflow: auto;

  &--item {
    display: flex;

    &:first-of-type a {
      margin-top: 15px;
    }

    & > a {
      flex-grow: 1;
      display: flex;
      align-items: center;
      margin: 5px 0;
      transition: background-color 0.25s ease-out;
      border-radius: 6px;
      color: inherit;

      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
    }

    h3 {
      font-weight: 300;
      margin-bottom: 10px;
    }

    h5 {
      margin: 0 10px;
      font-weight: 300;
      font-size: 1rem;
    }

    .image {
      width: 50px;

      & > div {
        padding-top: 100%;
        position: relative;

        img {
          border-radius: 50%;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
