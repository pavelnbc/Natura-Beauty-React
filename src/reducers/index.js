import { cartItemReducer } from './cartItemReducer';
import { totalPriceReducer } from './totalPriceReducer';
import { searchPluginReducer } from './searchPluginReducer';
import { menuReducer } from './menuReducer';
import { productsReducer } from './productsReducer';
import { categoriesReducer } from './categoriesReducer';
import { menuLinksReducer } from './menuLinksReducer';
import { dropDownReducer } from './dropdownReducer';

function reducer(state = {}, action) {
  // console.log(state.isDropdownOpened);

  return {
    cartItems: cartItemReducer(state.cartItems, action),
    totalPrice: totalPriceReducer(state, action),
    searchValue: searchPluginReducer(state.searchValue, action),
    isMenuOpened: menuReducer(state.isMenuOpened, action),
    menuLinks: menuLinksReducer(state.menuLinks, action),
    categories: categoriesReducer(state.categories, action),
    products: productsReducer(state.products, action),
    isDropdownOpened: dropDownReducer(state.isDropdownOpened, action)
  }
}

export default reducer