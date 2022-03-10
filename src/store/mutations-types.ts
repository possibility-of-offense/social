import { MutationTree } from "vuex";
import { RootMutationEnums } from "./mutation-enums";
import { state } from "./index";

import { Post, PersonRequestGrid, FriendsGrid } from "../types/types";

export type Mutations<S = state> = {
  [RootMutationEnums.SET_MOOD](
    state: S,
    payload?: { name: string; icon: string }
  ): void;
  [RootMutationEnums.SET_POST](state: S, payload: Post): void;
  [RootMutationEnums.RESET_MOOD](state: S): void;
  [RootMutationEnums.ADDING_FRIENDS](state: S, payload: FriendsGrid): void;
  [RootMutationEnums.REMOVE_FROM_FRIENDS](state: S, payload: string): void;
};

export const mutations: MutationTree<state> & Mutations = {
  [RootMutationEnums.SET_MOOD](state, payload: { name: string; icon: string }) {
    state.mood = payload;
  },
  [RootMutationEnums.SET_POST](state, payload: Post): void {
    state.posts.push(payload);
  },
  [RootMutationEnums.RESET_MOOD](state) {
    state.mood = {
      name: "",
      icon: "",
    };
  },
  [RootMutationEnums.ADDING_FRIENDS](state, payload) {
    state.addedFriends.push(payload);
  },
  [RootMutationEnums.REMOVE_FROM_FRIENDS](state, payload) {
    const ind = state.friends.findIndex((el) => el.name === payload);
    state.friends.splice(ind, 1);
  },
};
