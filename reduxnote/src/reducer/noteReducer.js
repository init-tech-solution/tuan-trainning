import { ADD_NEW_TASK, REMOVE_TASK, EDIT_TASK } from "../const/index";
const initialData = {
  taskNote: [],
};
const noteReducer = (state = initialData, action) => {
  switch (action.type) {
    case ADD_NEW_TASK:
      return {
        ...state,
        taskNote: [...state.taskNote, action.payload],
      };
    case REMOVE_TASK:
      return {
        ...state,
        taskNote: state.taskNote.filter((task) => task !== action.payload),
      };
    case EDIT_TASK:
      return {
        ...state,
        taskNote: state.taskNote.map((task) => {
          if (task == action.payload.oldTask) task = action.payload.newTask;

          return task;
        }),
      };
  }
  return state;
};
export default noteReducer;
