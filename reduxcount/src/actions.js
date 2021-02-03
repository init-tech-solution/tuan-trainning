export const actionAddItem = () => {
  return {
    type: "ADD_ITEM",
  };
};

// redux thunk, cho phep return ve mot function
export const actionAddItemDelay = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(actionAddItem());
    }, 1000);
  };
};
