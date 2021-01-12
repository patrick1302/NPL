import React from 'react'
import { Switch, Route } from "react-router-dom";

import Login from './pages/Login'
import Home from './pages/Home'
import './style.css'


function App() {
  return (
    <Switch>
      <Route exact component={Login} path="/" />
      <Route exact component={Home} path="/home" />
    </Switch>
  )
}

export default App;
