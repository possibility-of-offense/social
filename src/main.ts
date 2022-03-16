import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "../src/store/index";
import "../src/assets/styles.css";

const app = createApp(App);

app.directive("clicked-outside", {
  created(el, binding, vnode, prevNode) {
    el.clickedOutside = function (event: Event) {
      const trg = event.target as HTMLElement;

      if (!(el === event.target || el.contains(event.target))) {
        binding.value();
      }
    };

    document.body.addEventListener("click", el.clickedOutside);
  },
  unmounted(el) {
    document.body.removeEventListener("click", el.clickedOutside);
  },
});

app.use(store).use(router).mount("#app");
