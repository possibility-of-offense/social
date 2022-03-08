import { createStore, Store as VuexStore } from "vuex";
import { mutations, Mutations } from "./mutations-types";
import { actions, Actions } from "./action-types";

export interface state {
  mood: { name?: string; icon?: string };
  posts: { name: string; mood: { name: string; icon: string } }[];
}

export const store = createStore({
  state: {
    mood: {
      name: "",
      icon: "",
    },
    posts: [
      {
        name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptates incidunt. Debitis voluptates quod sint reprehenderit officia consectetur veniam id, odit voluptas? Quibusdam assumenda magni fuga numquam mollitia libero natus ad, autem aliquam minus hic. Possimus optio ipsum animi commodi praesentium doloremque modi iusto, quaerat cupiditate exercitationem a, laboriosam eum.        ",
        mood: {
          name: "Stupid",
          icon: "stupid",
        },
      },
    ],
  } as state,
  mutations,
  actions,
});

export type Store = Omit<VuexStore<state>, "commit" | "dispatch"> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1]
  ): ReturnType<Actions[K]>;
};

export function useStore() {
  return store as Store;
}
