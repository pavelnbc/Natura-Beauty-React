import { ADD_ITEM, DELETE_ITEM, UPDATE_CART_STATE } from "../actions/index";

export function totalPriceReducer(state = [], action) {
  switch (action.type) {
    case UPDATE_CART_STATE:
      return action.totalPrice;

    case ADD_ITEM:
      console.log(action.item.price)
      console.log(state.totalPrice + action.item.price)
      return state.totalPrice + action.item.price

    case DELETE_ITEM:
      let deletedItem = state.cartItems.find((item) => {
        return item.id === action.id
      });
      console.log(state.totalPrice - deletedItem.price);

      return state.totalPrice - deletedItem.price

    default: 
      return state.totalPrice  
  }
}