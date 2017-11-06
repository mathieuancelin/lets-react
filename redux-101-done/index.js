const { createStore } = require('redux');

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const initialState = { value: 42, nbAction: 0 };

function increment() {
  return {
    type: INCREMENT,
    value: 1
  };
}

function decrement() {
  return {
    type: DECREMENT,
    value: -1
  };
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case INCREMENT:
      return { 
        ...state, 
        value: state.value + action.value, 
        nbAction: state.nbAction + 1 
      };
    case DECREMENT:
      return { 
        ...state, 
        value: state.value + action.value, 
        nbAction: state.nbAction + 1 
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(() => {
  const { value, nbAction } = store.getState();
  console.log(`Store value: ${value} (actions ${nbAction})`);
});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());