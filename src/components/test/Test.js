import React, { Component } from "react";

class Test extends Component {
  componentDidMount() {
    console.log("componentDidMount...!");
  }
  componentWillMount() {
    console.log("componentwillMount...!");
  }

  render() {
    return (
      <div>
        <h1>this is a test</h1>
      </div>
    );
  }
}

export default Test;
