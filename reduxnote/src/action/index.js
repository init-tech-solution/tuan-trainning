import { ADD_NEW_TASK, EDIT_TASK, REMOVE_TASK } from "../const/index";

export const actAddNote = (payload) => {
  return {
    type: ADD_NEW_TASK,
    payload,
  };
};

export const actRemoveNote = (payload) => {
  return {
    type: REMOVE_TASK,
    payload,
  };
};

export const actEditNote = (payload) => {
  return {
    type: EDIT_TASK,
    payload,
  };
};
