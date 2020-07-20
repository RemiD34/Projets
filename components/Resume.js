import React, { Component } from "react";
import Portrait from "./Portrait";
import Menu from "./Menu";
import Article from "./Article";

export default class Resume extends Component {
  render() {
    return (
      <div>
        <Portrait />
        <Article />
        <Menu />
      </div>
    );
  }
}
