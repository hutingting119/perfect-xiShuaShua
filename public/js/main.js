import React, {Component} from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from "./containers/App";
import reducer from "./reducers/reducer";
// import register from './middlewares/register-middle';
import login from './middlewares/login-middle';
import Login from './containers/login';


const createStoreWithMiddleware = applyMiddleware(login)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/login" component={Login}/>
      </Route>
    </Router>
  </Provider>, document.getElementById('app'));
