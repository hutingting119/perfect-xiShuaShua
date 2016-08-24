import React, {Component} from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from "./containers/App";
import Hello from './containers/Hello';
import reducer from "./reducers/reducer";
import ReserveRoom from "./components/reserveRoom";
import getValue from "./middlewares/get-value";
import getRoomsInfo from "./middlewares/get-rooms-info"

const createStoreWithMiddleware = applyMiddleware(getValue,getRoomsInfo)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={ReserveRoom}/>
        <Route path = "/hello" component = {Hello}/>
      </Route>
    </Router>
  </Provider>, document.getElementById('app'));
