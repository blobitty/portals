import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ACAB from './components/ACAB.js'
import ColorPalette from './components/ColorPalette'


function App() {

  const [fillColors, setFillColors] = useState(Array(25).fill('white'))
  const [currentColor, setCurrentColor] = useState('blue')


  const onFillColor = (i) => {
  
    let newFillColors = fillColors.slice(0)
    newFillColors[i] = currentColor
    setFillColors(newFillColors)
  
  }

  return (
    <div className="App">
       <div className="illustration">

       {/* <ACAB2 fillColors={fillColors} onFill={onFillColor} /> */}
       </div>
       <ACAB fillColors={fillColors} onFill={onFillColor}/>
       <ColorPalette currentColor={currentColor} changeColor={setCurrentColor}/>
    </div>
  );
}

export default App;
