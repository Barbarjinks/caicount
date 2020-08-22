import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


function Title() {
  const counter = useSelector(state => state);

  return (
      <h1>{counter.num}</h1>
  );
}

export default Title;