<template>
  <div class="flex align-center justify-space-between">
    <Image>
      <router-link to="/">
        <img src="../../../assets/ventsi.jpg" alt=""
      /></router-link>
    </Image>
    <PublishFormSearchWrapperInput
      @inputClicked="handleInputClicked"
    ></PublishFormSearchWrapperInput>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Image from "../../General/Image.vue";
import PublishFormSearchWrapperInput from "./PublishFormSearchWrapperInput.vue";

export default defineComponent({
  name: "PublishFormSearchWrapper",
  components: {
    Image,
    PublishFormSearchWrapperInput,
  },
  setup(_, context) {
    const handleInputClicked = () => {
      context.emit("showModal");
    };
    return {
      handleInputClicked,
    };
  },
});
</script>

<style lang="scss">
.publish-form__search {
  a {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px solid #e4e6eb;
    }
  }
}
</style>
