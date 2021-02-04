const initialData = {
  username: null,
  password: null,
};
const noteReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_AUTHENTICATED":
      return {
        username: action.payload,
        password: action.payload,
      };
  }
  return state;
};
export default noteReducer;
