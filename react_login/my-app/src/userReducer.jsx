const initialData = {
  token: null,
  id: null,
};

const userReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_AUTHENTICATED":
      return {
        token: action.payload.token,
        id: action.payload.id,
      };
  }
  return state;
};

export default userReducer;
