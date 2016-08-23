import React, {Component} from "react";
import Header from "../components/Header";
import BestCommend from "../components/BestRecommend";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <BestCommend/>
      </div>
    );
  }
}

export default App;
