import { Action } from "overmind";

export const setTitle: Action = ({ state, effects, actions }, value) => {
  state.title = "bbb";
};
