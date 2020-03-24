import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Home from "./views/home";
import Login from "./views/login";
export default function App() {
  return (
    <div className="root">
      <Router>
        <Switch>
        <Route path="/" exact render={() => <Redirect to='/home'></Redirect>}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        </Switch>
      </Router>

    </div>


  )



}