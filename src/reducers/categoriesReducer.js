import { IMPORT_CATEGORIES } from '../actions/categoriesActions';

export function categoriesReducer(state = [], action) {
    switch(action.type) {
        case IMPORT_CATEGORIES:
            return action.categories;

        default:
            return state
    }
}