<template>
  <form>
    <label for="search" class="flex align-center">
      <img class="icon-img" src="../../assets/search.png" alt="" />
      <input
        autocomplete="off"
        id="search"
        type="text"
        placeholder="Search in Social"
        @click.once="emitShowDropdown"
      />
    </label>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderSearchWrapperForm",
  setup(_, context) {
    const emitShowDropdown = () => {
      context.emit("showD", true);
    };

    return {
      emitShowDropdown,
    };
  },
});
</script>

<style lang="scss" scoped>
form {
  margin: 0 10px;

  img {
    position: relative;
    right: -33px;
  }

  label {
    cursor: pointer;
  }

  input {
    border-radius: 25px;
    border: none;
    background-color: #f0f2f5;
    padding: 10px;
    padding-left: 45px;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }
}
</style>
