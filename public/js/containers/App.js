import React, {Component} from "react";
import Header from "../components/Header";
import BestCommend from "../components/BestRecommend";
import Register from '../components/Register';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <BestCommend/>
        <Register/>
      </div>
    );
  }
}

export default App;
