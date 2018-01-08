import reducer from '../reducers';
import initialStore from './initialStore';

function store(reducer, initialStore) {
    let state = initialStore;
    let callbacks = [];

    let getState = () => state;

    let dispatch = (action) => {
        state = reducer(state, action);
        callbacks.forEach(cb => cb())
    };

    let subscribe = (callback) => {
        callbacks.push(callback);

        return () => callbacks = callbacks.filter(cb => callback)
    };

    return {getState, dispatch, subscribe}
}

const storage = store(reducer, initialStore);

let dispatch = storage.dispatch;

storage.dispatch = (action) => {
    if(typeof action.then === 'function') {
       return action.then(dispatch)
    }

    return dispatch(action)
};

export default storage;