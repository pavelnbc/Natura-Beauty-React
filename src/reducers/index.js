import { cartItemReducer } from './cartItemReducer';
import { totalPriceReducer } from './totalPriceReducer';
import { searchPluginReducer } from './searchPluginReducer';
import { menuReducer } from './menuReducer';
import { productsReducer } from './productsReducer'
import { categoriesReducer } from './categoriesReducer'
import { menuLinksReducer } from './menuLinksReducer'

function reducer(state = {}, action) {
  console.log(state);
  console.log(action);
  return {
    cartItems: cartItemReducer(state.cartItems, action),
    totalPrice: totalPriceReducer(state, action),
    searchValue: searchPluginReducer(state.searchValue, action),
    isMenuOpened: menuReducer(state.isMenuOpened, action),
    menuLinks: menuLinksReducer(state.menuLinks, action),
    categories: categoriesReducer(state.categories, action),
    products: productsReducer(state.products, action)
  }
}

export default reducer