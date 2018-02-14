import { HANDLE_MENU, OFF_MENU } from '../actions';

export function menuReducer(state = false, action) {
  let bodyStyle = document.body.style;

  switch(action.type) {
    case OFF_MENU:
      bodyStyle.overflow = '';

      return false;

    case HANDLE_MENU:
       bodyStyle.overflow = 'hidden';

       return true;

    default: 
      return state;
  }
} 