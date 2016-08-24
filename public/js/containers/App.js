import React, {Component} from "react";
import Header from "../components/Header";
import BestCommend from "../containers/bestRecommend";
import Login from '../components/login';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <BestCommend/>
        <Login/>
      </div>
    );
  }
}

export default App;
