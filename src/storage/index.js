import reducer from '../reducers';
import initialStore from './initialStore';

function store(reducer, initialState) {
  let state = initialState;
  let callbacks = [];

  let getState = function() {
    return state;
  };

  let dispatch = function(action) {
    state = reducer(state, action);
    callbacks.forEach(cb => cb());
  };

  let subscribe = function(callback) {
    callbacks.push(callback);

    return () => callbacks = callbacks.filter(cb => cb !== callback);
  };

  return { getState, dispatch, subscribe };
}

const storage = store(reducer, initialStore);

const dispatch = storage.dispatch;

storage.dispatch = (action) => {
    if(typeof action.then === 'function') {
        return action.then(dispatch)
    }

    return dispatch(action)
};

export default storage;
