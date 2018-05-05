import {SET_DROPDOWN_MENU_OPENED} from "../actions";
import {SET_DROPDOWN_MENU_CLOSED} from "../actions";

export function dropDownReducer(state = false, action) {
    switch(action.type) {
        case SET_DROPDOWN_MENU_OPENED:
            return true;

        case SET_DROPDOWN_MENU_CLOSED:
            return false;

        default:
            return state
    }
}
