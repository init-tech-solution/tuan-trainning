const initialData = {
  count: 0,
};

const CountReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        count: ++state.count,
      };

    case "REMOVE_ITEM":
      return {
        count: --state.count,
      };
  }
  return state;
};
export default CountReducer;
