import { IMPORT_PRODUCTS } from '../actions'

export function productsReducer(state, action) {
    switch(action.type) {
        case IMPORT_PRODUCTS:
            return action.products

        default:
            return state
    }
}