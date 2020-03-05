import React, { Component } from "react";
import Comments from "../Comments/Comments";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./Layout.css";

import Navigation from "../Navigation/Navigation";

export default class Layout extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Main />
        <Comments />
        <Footer />
      </>
    );
  }
}
