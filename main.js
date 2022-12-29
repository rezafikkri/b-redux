// Aplikasi Redux

// Reduser(state, action)
function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
      break;
    case "DICREMENT":
      return state - 1;
      break;
    default:
      return state;
  }
}

// Store(reduser)
const store = Redux.createStore(counter);

// Subscribe
store.subscribe(() => {
  console.log("State saat ini " + store.getState());
});

// Action
store.dispatch({ type: "INCREMENT" });
