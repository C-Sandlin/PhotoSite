import React from 'react';
import TopNav from './components/nav/TopNav.js'
import "./styles/main.scss";
import AboutMe from "./components/aboutme/AboutMe"
import LandingPage from './components/landing/LandingPage.js';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function App() {

  const state = {
    status: "placeholder",
  };

  return (
    <div className="App" id="outermost-app">
      <Route exact path="/home">
        {/* <TopNav /> */}
        <LandingPage />
      </Route>
      <Route exact path="/journeys">
        <TopNav />
        {/* replace with actual */}
        {/* <LandingPage /> */}
      </Route>
    </div>
  );
}

export default App;
