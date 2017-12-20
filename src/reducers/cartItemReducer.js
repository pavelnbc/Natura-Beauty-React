import { UPDATE_CART_STATE, ADD_ITEM, DELETE_ITEM } from "../actions/index";

export function cartItemReducer(state = [], action) {
  switch (action.type) {
    case UPDATE_CART_STATE:
      return action.cartItems;

    case ADD_ITEM:
      return [...state, action.item];

    case DELETE_ITEM:
      let items = state.filter((item) => {
        return item.id !== action.id

      });

      return [...items];

    default:
      return state    
  }
}