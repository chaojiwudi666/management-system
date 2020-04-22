import React, { useEffect } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import myRoute from '@src/config/router';
import Home from "./views/home";
import Login from "./views/login";
import './App.scss'
export default function App() {
  return (
    <div className="root">
      <Provider store={store}>
      <HashRouter>
        <Switch>
        {
            myRoute.map(item => (
              <Route
                path={item.path}
                exact={item.exact}
                component={item.component}
                key={item.path}
              />
            ))
          }
        </Switch>
      </HashRouter>
    </Provider>

    </div>


  )



}