import React, { useEffect } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import loadableComponent from './utils/loadableComponent';
import { Provider } from 'react-redux';
import store from './store';
import myRoute from '@src/config/router';
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
                component={loadableComponent(item.component, {
                  model: item.model,
                  loadingType: 'full'
                })}
                key={item.path}
              />
            ))
          }
          <Redirect from="/" to="/home" exact />
        </Switch>
      </HashRouter>
    </Provider>

    </div>


  )



}