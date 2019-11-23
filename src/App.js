import React from 'react';
import TopNav from './components/nav/TopNav.js'
import "./styles/main.scss";
import AboutMe from "./components/aboutme/AboutMe"
import { withRouter } from 'react-router'
import LandingPage from './components/landing/LandingPageHooks.js';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Arizona from './components/photos/Arizona.js';
import NewZealand from './components/photos/NewZealand.js';
import NorthernItaly from './components/photos/NorthernItaly.js';
import Oregon from './components/photos/Oregon.js';
import SanDiego from './components/photos/SanDiego.js';
import Yellowstone from './components/photos/Yellowstone.js';
import Yosemite from './components/photos/Yosemite.js';
import Videos from './components/videos/Videos.js'


function App() {

  return (
    <div className="App" id="outermost-app">
      <Route exact path="/home" render={(props) => <LandingPage {...props} />}>
      </Route>
      <Route exact path="/photos/Arizona">
        <Arizona />
      </Route>
      <Route exact path="/photos/NewZealand">
        <NewZealand />
      </Route>
      <Route exact path="/photos/NorthernItaly">
        <NorthernItaly />
      </Route>
      <Route exact path="/photos/Oregon">
        <Oregon />
      </Route>
      <Route exact path="/photos/SanDiego">
        <SanDiego />
      </Route>
      <Route exact path="/photos/Yellowstone">
        <Yellowstone />
      </Route>
      <Route exact path="/photos/Yosemite">
        <Yosemite />
      </Route>
      <Route exact path="/videos">
        <Videos />
      </Route>
    </div>
  );
}

export default App;
