import React, { Component } from "react";
import Template from "./components/Template/Template";
import { connect } from "react-redux";
import { checkTokenAndReturn, getUser } from "./axios";
import * as actions from "./redux/actionCreators";

class App extends Component {
  componentDidMount() {
    if (checkTokenAndReturn()) {
      this.props.getUser();
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

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(actions.authActions.GetUser())
});

export default connect(null, mapDispatchToProps)(App);
