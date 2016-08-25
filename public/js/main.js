import React, {Component} from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from "./containers/App";
import reducer from "./reducers/reducer";
// import register from './middlewares/register-middle';
import getRoomsInfo from "./middlewares/getRoomsInfo-middle"
import ReserveRoom from "./components/ReserveRoom";
import register from "./components/Register";
import ReserveTime from "./components/ReserveTime"
const createStoreWithMiddleware = applyMiddleware(getRoomsInfo)(createStore);
import getBest from "./middlewares/getBest-middle";
// import register from './middlewares/register-middle';

// const createStoreWithMiddleware = applyMiddleware(getBest)(createStore);
const store = createStoreWithMiddleware(reducer);


render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
        {/*<IndexRoute component={register}/>*/}
        <Route path="/reserveTime" component = {ReserveTime}/>
        <Route path="/reserveRoom" component={ReserveRoom}/>
        <Route path="/register" component={register}/>
      {/*</Route>*/}
    </Router>
  </Provider>, document.getElementById('app'));
