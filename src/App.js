import React from 'react';
import { useSelector, useDispatch } from './redux/';

import {
  incrementCounter,
  decrementCounter,
  resetCounter
} from './reducers/counter.js';
import { updateText, clearText } from './reducers/input.js';

function App() {
  const { counter, textValue } = useSelector(state => ({
    counter: state.counter.value,
    textValue: state.input.value
  }));

  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <h2>{counter}</h2>
        <button type="button" onClick={() => dispatch(incrementCounter())}>
          Increment
        </button>
        <button type="button" onClick={() => dispatch(decrementCounter())}>
          Decrement
        </button>
        <button type="button" onClick={() => dispatch(resetCounter())}>
          Reset
        </button>
      </div>
      <br />
      <br />
      <div>
        <input
          value={textValue}
          onChange={e => dispatch(updateText(e.target.value))}
        />
        <button onClick={() => dispatch(clearText())}>Clear</button>
      </div>
    </div>
  );
}

export default App;
