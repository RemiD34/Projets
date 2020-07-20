import React, { Component } from "react";
//import Apropos from "./Apropos";
//import Formation from "./Formation";

export default class Article extends Component {
  render() {
    console.log(this.props.leState.apropos);
    return (
      <div
        style={{ backgroundColor: "red", width: "500px", height: "400px" }}
      ></div>
    );
  }
}
