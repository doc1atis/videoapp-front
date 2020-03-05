import React, { Component } from "react";
import Template from "./components/Template/Template";
import { connect } from "react-redux";
import { checkTokenAndReturn, getUser } from "./axios";
import * as actions from "./redux/actionCreators";

class App extends Component {
  componentDidMount() {
    let loggedInToken = checkTokenAndReturn();

    if (loggedInToken) {
      this.props.getUser(loggedInToken._id);
    }
  }

  render() {
    return (
      <div className="App">
        <Template />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(actions.authActions.GetUser())
  };
};

export default connect(null, mapDispatchToProps)(App);
