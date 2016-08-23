import React, {Component} from "react";

class Value extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onGet} className="btn btn-info">快点我吧</button>
        <span>{this.props._id}</span>
      </div>
    );
  }
}

export default Value;
