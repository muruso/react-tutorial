import { createStore } from "redux";

// const reducer = () => {
//   console.log("reducer has been called.");
// }

const reducer = (state = 0, action) => {
  switch(action.type) {
    case "INC":
      return state + action.payload;
    case "DEC":
      return state - action.payload;
  }
  return state;
}

const store = createStore(reducer, 10000);

store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch({type: "INC", payload: 12});
store.dispatch({type: "INC", payload: 134});
store.dispatch({type: "INC", payload: 3});
store.dispatch({type: "INC", payload: 3});
store.dispatch({type: "DEC", payload: 333333333});


