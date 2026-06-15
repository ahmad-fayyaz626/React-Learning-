const intialstate = {
  cart: [],
};

export default function AddtoCart(state = intialstate, action) {
  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      cart: [...state.cart, action.payload],
    };
  } else if (action.type === "DELETE_FROM_CART") {
    if (state.cart.length === 0) {
      console.log("Cart is empty");
      return state;
    } else {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
  }
  return state;
}
