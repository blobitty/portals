import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ACAB from './components/ACAB.js'
import SeeingSigns from './components/Seeing_Signs.js'
import Kablam from './components/Kablam.js'
import AlienSpeak from './components/AlienSpeak.js'
import FunnyLight from './components/FunnyLight.js'
import LeaveEarth from './components/LeaveEarth.js'
import AllGoesBad from './components/AllGoesBad.js'
import Spaceships from './components/Spaceships.js'
import DiamondDark from './components/DiamondDark.js'
import Numb from './components/Numb.js'

import Home from './components/Home'


function App() {

  const fillPaths = pathData =>{
      console.log("fillPaths: ", pathData);
      return pathData;
  }


  //This array is going to keep track of all the colors we apply, 
  //and which paths you’ve applied them to as they relate to the SVG.
    //we initially set all svg paths to white to make the image blank outline
  const [fillColors, setFillColors] = useState(Array(fillPaths).fill('white'))
  //The setCurrentColor function will allow for the currentColor to update
  const [currentColor, setCurrentColor] = useState('green')


  const onFillColor = i => {
    //takes in an index, makes a copy of the current fillColors array, 
    let newFillColors = fillColors.slice(0)
    //then apply the currentColor to that index in the array copy. 
    //This will change the string at that index from the previous color “white” to “blue” (or whichever color you choose). 
    newFillColors[i] = currentColor
    //Update the fillColors array in state with the new array.
    setFillColors(newFillColors)

  }
  //SVG routed to various name based paths
  return (
    <div className="App">
       <Router> 

      <div className="container">
     
     <Switch>
     

      <Route path="/kablam">
        <Kablam changeColor={setCurrentColor} currentColor={currentColor} fillSize={fillPaths} fillColors={fillColors} onFill={onFillColor} />
        </Route>
        
        <Route path="/alien-speak">
        <AlienSpeak changeColor={setCurrentColor} currentColor={currentColor} fillSize={fillPaths} fillColors={fillColors} onFill={onFillColor} />
        </Route> 

        <Route path="/funny-in-the-light">
        <FunnyLight changeColor={setCurrentColor} currentColor={currentColor} fillSize={fillPaths} fillColors={fillColors} onFill={onFillColor} />
        </Route> 

        <Route exact path="/acab">
        <ACAB changeColor={setCurrentColor} currentColor={currentColor} fillSize={fillPaths} fillColors={fillColors} onFill={onFillColor} />
        </Route>

        <Route path="/seeing-signs">
        <SeeingSigns changeColor={setCurrentColor} currentColor={currentColor} fillSize={fillPaths} fillColors={fillColors} onFill={onFillColor} />
        </Route>

        <Route path="/leave-earth">
        <LeaveEarth changeColor={setCurrentColor} currentColor={currentColor} fillSize={fillPaths} fillColors={fillColors} onFill={onFillColor} />
        </Route>

        <Route path="/all-goes-bad">
        <AllGoesBad changeColor={setCurrentColor} currentColor={currentColor} fillSize={fillPaths} fillColors={fillColors} onFill={onFillColor} />
        </Route>

        <Route path="/spaceships">
        <Spaceships changeColor={setCurrentColor} currentColor={currentColor} fillSize={fillPaths} fillColors={fillColors} onFill={onFillColor} />
        </Route>

        <Route path="/diamond-dark">
        <DiamondDark changeColor={setCurrentColor} currentColor={currentColor} fillSize={fillPaths} fillColors={fillColors} onFill={onFillColor} />
        </Route>

        <Route path="/numb">
        <Numb changeColor={setCurrentColor} currentColor={currentColor} fillSize={fillPaths} fillColors={fillColors} onFill={onFillColor} />
        </Route>

     <Route path="/" component={Home}/>
      
        
        </Switch> 
        
      </div>

      </Router> 

    </div>

  );
}

export default App;
