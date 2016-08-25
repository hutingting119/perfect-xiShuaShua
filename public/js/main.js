import React, {Component} from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from "./containers/App";
import reducer from "./reducers/reducer";

// import register from './middlewares/register-middle';
import getRoomsInfo from "./middlewares/getRoomsInfo-middle"
import register from "./components/Register";
import ReserveTime from "./components/ReserveTime"
const createStoreWithMiddleware = applyMiddleware(getRoomsInfo)(createStore);
// import register from './middlewares/register-middle';
// const createStoreWithMiddleware = applyMiddleware(getRoomsInfo)(createStore);

import ReserveRoom from "./components/ReserveRoom";
import getBest from "./middlewares/getBestRoom-middle";
import BestReserveSuccess from './components/BestReserveSuccess';

// const createStoreWithMiddleware = applyMiddleware(getBest)(createStore);
const store = createStoreWithMiddleware(reducer);

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
      {/*<IndexRoute component={register}/>*/}
      <Route path="/reserveTime" component={ReserveTime}/>
      <Route path="/reserveRoom" component={ReserveRoom}/>
      <Route path="/register" component={register}/>
      {/*</Route>*/}
      {/*<IndexRoute component={register}/>*/}
      <Route path="/reserveRoom" component={ReserveRoom}/>
      <Route path="/bestReserve" component={BestReserveSuccess}/>
    </Router>
  </Provider>, document.getElementById('app'));
