import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import {Dashboard} from './components/Dashboard'
import {Display} from './components/Display'

function App() {
const [balls, setBalls] = useState(0)
const [strikes, setStrikes] = useState(0)

const addBalls = (num) => {
  if (balls < 4){
    return setBalls(balls + num);
  }
  return setBalls(0);
}

const addStrikes = (num) => {
  if (strikes < 3){
    return setStrikes(strikes + num);
  }
  return setStrikes(0);
}

const reset = () => {
  setBalls(0)
  setStrikes(0)
}

const fouls = (num) => {
  if (strikes < 2) {
    return setStrikes(strikes + num)
  }
}

  return (
    <div className="App">
      <Dashboard addBalls={addBalls} addStrikes={addStrikes} reset={reset} foul={fouls}/>
      <Display balls={balls} strike={strikes}/>
    </div>
  );
}

export default App;
