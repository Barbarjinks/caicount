import React from "react";
import { useSelector } from "react-redux";


function SubTitle() {
  const quoteCeator = useSelector(state => state);

  return (
      <h2>{quoteCeator.quote}</h2>
  );
}

export default SubTitle;