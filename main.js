// Aplikasi Redux
import { configureStore } from '@reduxjs/toolkit';

// Reduser(state, action)
const initialState = {
  value: 0
};

function counter(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        value: state.value + 1
      };
      break;
    case "DECREMENT":
      return {
        ...state,
        value: state.value - 1
      };
      break;
    default:
      return state;
  }
}

// Store(reduser)
const store = configureStore({ reducer: counter });

// Selectors
const selectCounterValue = (state) => state.value;

// Subscribe
store.subscribe(() => {
  console.dir("State saat ini " + selectCounterValue(store.getState()));
});

// Action
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
