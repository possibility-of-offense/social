import { createStore, Store as VuexStore } from "vuex";
import { mutations, Mutations } from "./mutations-types";
import { actions, Actions } from "./action-types";

import { PersonRequestGrid, FriendsGrid } from "@/types/types";

export interface state {
  mood: { name?: string; icon?: string };
  posts: { name: string; mood: { name: string; icon: string } }[];
  friends: PersonRequestGrid[];
  addedFriends: FriendsGrid[];
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
    friends: [
      {
        name: "Gosho",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      },
      {
        name: "Nikolai",
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      },
      {
        name: "Mihaela",
        image:
          "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        name: "Nikolina",
        image:
          "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
      },
      {
        name: "Jore Gyzo",
        image:
          "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        name: "Krasimir Ivanov",
        image:
          "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
      },
    ],
    addedFriends: [],
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
    payload?: Parameters<Actions[K]>[1]
  ): ReturnType<Actions[K]>;
};

export function useStore() {
  return store as Store;
}
