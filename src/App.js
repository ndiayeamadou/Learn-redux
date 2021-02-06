import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './actions';

function App() {

  const counterVar = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.loggedReducer)
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <h3>Learn Redux !</h3>
      <h4>counter: {counterVar}</h4>

      <button onClick={ () => dispatch(increment(5)) }>+</button>
      <button onClick={ () => dispatch(decrement()) }>-</button>

      <h3>{ isLogged ? 'Logged In :)' : '' }</h3>
    </div>
  );
}

export default App;
