import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

//STORE *** - Globalized state - All the data or state


//ACTION
const increment = () => {
  return {
    type : 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
    //Or name: 'DECREMENT'
  }
}


//REDUCER
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
};
//Now we can add this to the store
let store = createStore(counter);
//Display it in the console
store.subscribe( ()=> console.log(store.getState()))

//DISPATCH --- to execute action
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
