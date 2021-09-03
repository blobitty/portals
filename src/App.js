import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useHistory } from "react-router-dom";
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
import styled from 'styled-components'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import firebase from "firebase";
import Home from './components/Home'


function App() {

  let history = useHistory();
  const firebaseApp = firebase.apps[0];

  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/signedIn',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
  };



  const fillPaths = pathData => {
    console.log("fillPaths: ", pathData);
    return pathData;
  }

  //This array is going to keep track of all the colors we apply, 
  //and which paths you’ve applied them to as they relate to the SVG.
  //we initially set all svg paths to white to make the image blank outline
  const [fillColors, setFillColors] = useState(Array(fillPaths).fill('white'))
  //The setCurrentColor function will allow for the currentColor to update
  const [currentColor, setCurrentColor] = useState('green')

  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.



  const onFillColor = i => {
    //takes in an index, makes a copy of the current fillColors array, 
    let newFillColors = fillColors.slice(0)
    //then apply the currentColor to that index in the array copy. 
    //This will change the string at that index from the previous color “white” to “blue” (or whichever color you choose). 
    newFillColors[i] = currentColor
    //Update the fillColors array in state with the new array.
    setFillColors(newFillColors)

  }

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  
//UI
  if (!isSignedIn) {
    return (
      <div className="AppTwo">
        <div className="container">
        <Title>Sign Into The Portal</Title>
        <p style={{ textAlign: "center", fontFamily:"Comic Sans MS"}}>Please sign-in with your phone number. No password required</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} className="AppTwo" />
        </div>
        <div id="footer">
        {'Developed by'} <a style={{ color:"white"}} href="https://twitter.com/blobittyblah">Boubacar Bah</a>
        <p>Illustration by <a style={{ color:"white"}} href="https://www.instagram.com/arteamok/">Marcos Alvarado</a></p>
        <p>Graphic Design Edits by <a style={{ color:"white"}} href="https://www.instagram.com/chefkhray/">Kheperah Ray</a></p>
            </div>
      </div>
    );
  } else {
    //SVG routed to various name based paths
    return (
      <div className="App">
            <div>
            <Title>Enter the Portal: Coloring Book </Title>
            </div>
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

              <Route exact={true} path="/acab">
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

              <Route path="/" component={Home} />
            </Switch>

          </div>

        </Router>
        <div id="footer">
        {'Developed by'} <a style={{ color:"white"}} href="https://twitter.com/blobittyblah">Boubacar Bah</a> and <a href="https://www.floreolabs.org">{'Floreo Labs'}</a>
        <p>Illustration by <a style={{ color:"white"}} href="https://www.instagram.com/arteamok/">Marcos Alvarado</a></p>
        <p>Graphic Design Edits by <a style={{ color:"white"}} href="https://www.instagram.com/chefkhray/">Kheperah Ray</a></p>
            </div>
      </div>

    );
  }
}

const Title = styled.h1`
  text-align: center;
  color: #60ad5e;
  padding: 16px;
  font-family: monospace;
  margin-top: 0px;
  font-style: italic;
  font-size: 10vmin;
  background-color: #534bae;
`;

export default App;
