import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Button from './components/Button';
import Title from './components/Button';
import SubTitle from './components/Button';

function App() {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Title />
      <SubTitle />
      <Button />
    </div>
  );
}

export default App;