import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { batch } from 'react-redux';

function Button() {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();

  return (
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
        Magic Button
      </button>
  );
}

export default Button;