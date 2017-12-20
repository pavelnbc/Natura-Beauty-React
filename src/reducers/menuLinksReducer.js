import { IMPORT_MENU_ACTIONS } from '../actions';

export function menuLinksReducer(state = [], action) {
    switch(action.type) {
        case(IMPORT_MENU_ACTIONS):
            return action.menuLinks;

        default:
            return state
    }
}