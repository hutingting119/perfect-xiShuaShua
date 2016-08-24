import React, {Component} from "react";
import ReserveRooms from "./ReserveRoom"
import Header from "../components/Header";
import BestCommend from "../containers/bestRecommend";
import Login from '../components/login';

class App extends Component {
  render() {
    return (
      <div>
        <ReserveRooms/>
        <Header/>
        <BestCommend/>
        {/*<Login/>*/}
      </div>
    );
  }
}

export default App;
