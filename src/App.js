import React from 'react';
import TopNav from './components/nav/TopNav.js'
import "./styles/main.scss";
import AboutMe from "./components/aboutme/AboutMe"
import LandingPage from './components/landing/LandingPage.js';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Arizona from './components/journeys/Arizona.js';
import NewZealand from './components/journeys/NewZealand.js';
import NorthernItaly from './components/journeys/NorthernItaly.js';
import Oregon from './components/journeys/Oregon.js';
import SanDiego from './components/journeys/SanDiego.js';
import Yellowstone from './components/journeys/Yellowstone.js';
import Yosemite from './components/journeys/Yosemite.js';


function App() {

  const state = {
    status: "placeholder",
  };

  return (
    <div className="App" id="outermost-app">
      <Route exact path="/home">
        <LandingPage />
      </Route>
      {/* <Route exact path="/journeys">
        <TopNav />
      </Route> */}
      <Route exact path="/journeys/Arizona">
        <Arizona />
      </Route>
      <Route exact path="/journeys/NewZealand">
        <NewZealand />
      </Route>
      <Route exact path="/journeys/NorthernItaly">
        <NorthernItaly />
      </Route>
      <Route exact path="/journeys/Oregon">
        <Oregon />
      </Route>
      <Route exact path="/journeys/SanDiego">
        <SanDiego />
      </Route>
      <Route exact path="/journeys/Yellowstone">
        <Yellowstone />
      </Route>
      <Route exact path="/journeys/Yosemite">
        <Yosemite />
      </Route>
    </div>
  );
}

export default App;
