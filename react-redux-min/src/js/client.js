import { createStore, combineReducers } from "redux";


const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      state = {...state, name: action.payload}
      break;
    case "CHANGE_AGE":
      state = {...state, age: action.payload}
      break;
  }
  return state;
}
const tweetReducer = (state = [], action) => {
  switch(action.type) {
    case "ADD_TWEET":
      state = state.concat({id: Date.now(), text: action.payload});
    break;
  }

  return state;
}

const reducers = combineReducers({
  user: userReducer,
  tweet: tweetReducer
})

const store = createStore(reducers);

store.subscribe(() => {
  console.log("store changed!!",store.getState());
})


store.dispatch({type: "CHANGE_NAME", payload: "MURUSOOOO"});
store.dispatch({type: "CHANGE_AGE", payload: 24});
store.dispatch({type: "CHANGE_AGE", payload: 42});
store.dispatch({type: "ADD_TWEET", payload: "first tweet"});
store.dispatch({type: "ADD_TWEET", payload: "second tweet"});







