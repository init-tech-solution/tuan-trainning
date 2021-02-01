const initialData = {
  token: null,
  userId: null,
};

const userReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_ID_TOKEN":
      return {
        ...state,
      };
  }
  return state;
};

export default userReducer;
