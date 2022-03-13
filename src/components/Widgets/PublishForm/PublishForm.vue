<template>
  <div class="publish-form bs-3">
    <PublishFormSearchWrapper
      @showModal="handleShowModal"
      class="publish-form__search"
    ></PublishFormSearchWrapper>

    <Separator></Separator>
    <PublishFormButtonsWrapper
      @emitShowModalMood="showModalMood = true"
      @emitShowModalForm="showModalForm = true"
    >
    </PublishFormButtonsWrapper>

    <Teleport to="#modal">
      <Modal
        :styles="stylesObj"
        v-if="showModalForm"
        @closeModal="showModalForm = false"
      >
        <div class="modal-header__publish">
          <h3>Publish something</h3>
          <button @click="showModalForm = false" class="hover-bg-gray-1">
            &times;
          </button>
        </div>
        <Separator></Separator>
        <div class="modal-header__form">
          <form @submit.prevent="handleSubmit">
            <label for="form-text">Type something</label>
            <textarea
              v-model="postBody"
              placeholder="Type something"
              id="form-text"
              autocomplete="off"
              @keydown.enter="handleSubmit"
            ></textarea>

            <Separator></Separator>
            <Button>
              <button class="primary-btn">Publish</button>
            </Button>
          </form>
        </div>
      </Modal>
      <!-- Different modal -->
      <Modal
        @closeModal="handleCloseAnyModal"
        :styles="stylesObj"
        v-if="showModalMood"
      >
        <PublishFormMoods
          @clickedIcon="handleCloseModal"
          class="modal-header__moods"
          :moods="moods"
        ></PublishFormMoods>
      </Modal>
    </Teleport>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onUpdated,
  reactive,
  ref,
  watch,
  watchEffect,
} from "vue";

import { ModalStyles, MoodsIcons } from "@/types/types";
import { useStore } from "@/store/index";
import { RootActionEnums } from "@/store/action-enums";

// Components
import PublishFormSearchWrapper from "./PublishFormSearchWrapper.vue";
import PublishFormButtonsWrapper from "./PublishFormButtonsWrapper.vue";
import PublishFormMoods from "./PublishFormMoods.vue";
import Modal from "@/components/General/Modal.vue";
import Button from "@/components/General/Button.vue";
import Separator from "@/components/General/Separator.vue";

export default defineComponent({
  name: "PublishForm",
  components: {
    PublishFormSearchWrapper,
    PublishFormButtonsWrapper,
    PublishFormMoods,
    Modal,
    Button,
    Separator,
  },
  setup() {
    // Modal Form
    const showModalForm = ref<true | false>(false);
    const stylesObj = reactive<ModalStyles>({
      borderRadius: "8px",
      backgroundColor: "#fff",
      boxShadow: "0 3px 5px 0.3px rgba(0, 0, 0, 0.2)",
      padding: "1rem",
      width: "400px",
    });
    const handleShowModal = () => {
      showModalForm.value = !showModalForm.value;
    };

    // Modal Mood
    const showModalMood = ref<true | false>(false);

    const handleCloseAnyModal = () => {
      showModalForm.value = false;
      showModalMood.value = false;
    };

    // Close Modal
    const handleCloseModal = () => {
      showModalMood.value = false;
      showModalForm.value = true;
    };

    // Moods
    const moods = ref<Array<MoodsIcons>>([
      { name: "Happy", icon: "happy" },
      { name: "Sad", icon: "sad" },
      { name: "Crazy", icon: "crazy" },
      { name: "Stupid", icon: "stupid" },
    ]);

    // Submission
    const store = useStore();
    const postBody = ref<string | "">("");

    const getMood = computed(() => {
      if (store.state.mood) {
        return store.state.mood;
      }
    });

    const handleSubmit = (e: KeyboardEvent) => {
      if (!e.shiftKey) {
        if (getMood.value?.name && getMood.value?.icon) {
          showModalForm.value = !showModalForm.value;
          store.dispatch(RootActionEnums.SET_POST, {
            name: postBody.value,
            mood: getMood.value as { name: string; icon: string },
          });
          store.dispatch(RootActionEnums.RESET_MOOD);
        } else {
          // TODO add proper alert
          alert("Add mood");
        }
      }

      postBody.value = "";
    };

    const addListener = function (e: KeyboardEvent) {
      const key = e.key;
      if (key === "Escape") {
        showModalForm.value = !showModalForm.value;
      }
    };

    onUpdated(() => {
      if (showModalForm.value) {
        window.addEventListener("keydown", addListener);
      } else {
        window.removeEventListener("keydown", addListener);
      }
    });

    return {
      stylesObj,
      showModalForm,
      handleShowModal,
      moods,
      showModalMood,
      handleCloseAnyModal,
      postBody,
      handleSubmit,
      handleCloseModal,
    };
  },
});
</script>

<style lang="scss">
.publish-form {
  background-color: #fff;
  padding: 12px;
  border-radius: 8px;
}

.modal-header__publish {
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.6rem;
    display: block;
    margin-left: 10px;
    transition: background-color 0.25s ease-out;

    &:hover {
      background-color: rgba(#000000, 0.2);
    }
  }
}

.modal-header__form {
  label {
    display: none;
  }

  textarea {
    width: 100%;
    margin-top: 0.5rem;
    padding: 10px 5px;
    border: none;
    outline: none;
    border-radius: 5px;
    height: 150px;

    &:active,
    &:focus {
      box-shadow: 1px 1px 7px 0.2px rgba(0, 0, 0, 0.2);
    }
  }
}

.modal-header__moods {
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    li {
      transition: background-color 0.25s ease-out;
      border-radius: 7px;
      padding: 1rem;

      &:hover {
        background-color: rgba(0, 0, 0, 0.07);
      }

      a {
        display: flex;
        align-items: center;
        color: inherit;

        img {
          width: 20px;
        }

        p {
          margin-left: 10px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
