const initialData = {
  username: null,
  password: null,
  taskNote: [],
};
const noteReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_AUTHENTICATED":
      return {
        username: action.payload,
        password: action.payload,
      };

    case "ADD_TASK":
      return {
        ...state,
        taskNote: [...state.taskNote, action.payload],
      };
  }
  return state;
};
export default noteReducer;
