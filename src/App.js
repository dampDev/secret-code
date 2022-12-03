import React from 'react';
import './App.css';
import {UseState} from './UseState';
import {ClassState} from './ClassState';
import { UseReducer } from './useReducer';

function App() {
  return (
  <div className='App'>
    <UseReducer
    name="Use Reducer"/>
    <UseState
      name="UseState"/>
    <ClassState
      name="Class State"/>

  </div>
  );
}

export default App;
