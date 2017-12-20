import { HANDLE_MENU, OFF_MENU } from '../actions';

export function menuReducer(state = false, action) {
  switch(action.type) {
    case OFF_MENU: 
      return false;

    case HANDLE_MENU:
       return true;

    default: 
      return state;
  }
} 