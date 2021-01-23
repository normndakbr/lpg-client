import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Pages
import LandingPage from './pages/LandingPage'
import HowToPlay from './pages/HowToPlay'
import LeaderBoard from './pages/LeaderBoard'

function App() {
  return (
    <div>
      <Router>
        <h1 className="text-4xl text-center font-bold text-green-800">Hello LPG</h1>

        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/howtoplay">
            <HowToPlay />
          </Route>
          <Route exact path="/leaderboard">
            <LeaderBoard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
