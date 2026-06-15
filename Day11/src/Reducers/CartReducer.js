const initialState = {
  cart: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === "ADD_PRODUCT") {
    const newState = {
      ...state,
      cart: [...state.cart, ...action.payload],
    };

    

    return newState;
  }

  return state;
};
export default reducer;
