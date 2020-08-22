import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { batch } from 'react-redux';

function App() {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{counter.num}</h1>
      <h1>{counter.quote}</h1>
      <button
        onClick={() =>
          batch(() => {
            dispatch({
              type: "INCREMENT",
              step: 1
            });
            dispatch({
              type: "DATE",
            });
          })
        }
      >
        Increment
      </button>
    </div>
  );
}

export default App;