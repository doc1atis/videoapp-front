import React, { Component } from "react";
import Posts from "../Posts/Posts";

import Main from "../Main/Main";
import "./Layout.css";

import Navigation from "../Navigation/Navigation";

export default class Layout extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Main />
        <Posts />
      </>
    );
  }
}
