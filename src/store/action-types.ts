import { ActionTree, ActionContext } from "vuex";
import { RootActionEnums } from "./action-enums";
import { RootMutationEnums } from "./mutation-enums";
import { state } from "./index";
import { Mutations } from "./mutations-types";
import { Post } from "@/types/types";

type definedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<state, state>, "commit">;

export interface Actions {
  [RootActionEnums.SET_MOOD](
    { commit }: definedActionContext,
    payload: { name: string; icon: string }
  ): void;
  [RootActionEnums.SET_POST](
    { commit }: definedActionContext,
    payload: Post
  ): void;
  [RootActionEnums.RESET_MOOD]({ commit }: definedActionContext): void;
}

export const actions: ActionTree<state, state> & Actions = {
  [RootActionEnums.SET_MOOD](
    { commit },
    payload: { name: string; icon: string }
  ) {
    commit(RootMutationEnums.SET_MOOD, payload);
  },
  [RootActionEnums.SET_POST]({ commit }, payload: Post) {
    commit(RootMutationEnums.SET_POST, payload);
  },
  [RootActionEnums.RESET_MOOD]({ commit }) {
    commit(RootMutationEnums.RESET_MOOD);
  },
};
