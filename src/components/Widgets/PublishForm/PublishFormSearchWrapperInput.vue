<template>
  <form>
    <InputText
      class="caret-color-transparent"
      @click="$emit('inputClicked')"
      :obj="styleAndClassObj"
    >
    </InputText>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

import { InputGeneral } from "@/types/types";

// Components
import InputText from "@/components/General/InputText.vue";

export default defineComponent({
  name: "PublishFormSearchWrapperInput",
  components: { InputText },
  setup() {
    const styleAndClassObj = reactive<InputGeneral>({
      id: "search",
      class: "bs-3 input-text",
      label: "Publish",
      showLabel: false,
      placeholder: "Publish something",
    });

    return {
      styleAndClassObj,
    };
  },
});
</script>

<style lang="scss" scoped>
form {
  flex-grow: 1;
  margin-left: 11px;

  label {
    display: none;
  }
}
</style>
