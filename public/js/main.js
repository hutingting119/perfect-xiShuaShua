import React, {Component} from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import getRoomsInfo from "./middlewares/getRoomsInfo-middle"
import register from './middlewares/register-middle';
import getBest from "./middlewares/getBestRoom-middle";
import Register from "./containers/Register";
import ReserveTime from "./components/ReserveTime"
import ReserveRoom from "./containers/ReserveRoom";
import BestReserveSuccess from './components/BestReserveSuccess';
import App from "./containers/App";
import reducer from "./reducers/reducer";
// import register from './middlewares/register-middle';
import login from './middlewares/login-middle';
import Login from './containers/login';


const createStoreWithMiddleware = applyMiddleware(login)(createStore);

const createStoreWithMiddleware = applyMiddleware(register, getBest, getRoomsInfo)(createStore);
const store = createStoreWithMiddleware(reducer);

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/login" component={Login}/>
        <IndexRoute component={ReserveRoom}/>
        <Route path="/reserveTime" component={ReserveTime}/>
        <Route path="/register" component={Register}/>
        <Route path="/reserveRoom" component={ReserveRoom}/>
        <Route path="/bestReserve" component={BestReserveSuccess}/>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));
