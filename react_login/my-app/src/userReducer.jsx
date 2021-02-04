const initialData = {
  token: null,
  id: null,
  name: null,
};

const userReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_AUTHENTICATED":
      return {
        token: action.payload.token,
        id: action.payload.id,
      };
    case "SHOW_NAME":
      return {
        ...state,
        name: action.payload,
      };
  }
  return state;
};

export default userReducer;
