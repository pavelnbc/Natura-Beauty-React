import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

// import initialStore from './initialStore';
import reducer from '../reducers';

const storage = createStore(reducer, applyMiddleware(promise, thunk));

export default storage;



/*
function store(reducer) {
    let state = initialStore;
    let callbacks = [];

    let getState = () => state;

    let dispatch = (action) => {
        state = reducer(state, action);
        callbacks.forEach((cb) => cb());
    };

    let subscribe = (callback) => {
        callbacks.push(callback);

        return () => callbacks = callbacks.filter((cb) => cb !== callback)
    };

    return { getState, dispatch, subscribe }
}

let dispatch = storage.dispatch;

storage.dispatch = (action) => {
    if(typeof action === 'function') {
        return action(dispatch);
    } else if(typeof action.then === 'function') {
        return action.then(dispatch)
    }

    return dispatch(action)
};
*/
