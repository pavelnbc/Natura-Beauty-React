import { SET_SEARCH_VALUE, CLEAR_SEARCH } from '../actions';
import {GET_SEARCH_VALUE, DELETE_SEARCH_VALUE} from "../actions/index";


export function searchPluginReducer(state = "", action) {
  switch(action.type){
    case GET_SEARCH_VALUE:
      return action.searchValue;

    case DELETE_SEARCH_VALUE:
      return "";

    default: 
      return state
  }
}