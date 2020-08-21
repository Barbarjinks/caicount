import React from 'react';
import logo from './logo.svg';
import './App.css';

import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'

const makeNumOfTodosWithIsDoneSelector = () =>
  createSelector(
    state => state.todos,
    (_, isDone) => isDone,
    (todos, isDone) => todos.filter(todo => todo.isDone === isDone).length
  )

export const TodoCounterForIsDoneValue = ({ isDone }) => {
  const selectNumOfTodosWithIsDone = useMemo(
    makeNumOfTodosWithIsDoneSelector,
    []
  )

  const numOfTodosWithIsDoneValue = useSelector(state =>
    selectNumOfTodosWithIsDone(state, isDone)
  )

  return <div>{numOfTodosWithIsDoneValue}</div>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
