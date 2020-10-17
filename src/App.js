import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [fillColors, setFillColors] = useState(Array().fill('white'))
  const [currentColor, setCurrentColor] = useState('blue')


  const onFillColor = (i) => {
  
    let newFillColors = fillColors.slice(0)
    newFillColors[i] = currentColor
    setFillColors(newFillColors)
  
  }

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
