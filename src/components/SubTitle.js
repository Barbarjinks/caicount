import React from "react";
import { useSelector } from "react-redux";


function SubTitle() {
  const counter = useSelector(state => state);

  return (
      <h2>{counter.quote}</h2>
  );
}

export default SubTitle;