import React, { Component } from "react";
import { connect } from "react-redux";
import { checkTokenAndReturn, getUser } from "./axios";
import * as actions from "./redux/actionCreators";
import Spinner from "./components/Spinner/Spinner";
const Main = React.lazy(() => import("./components/Layout/Layout"));

class App extends Component {
  componentDidMount() {
    if (checkTokenAndReturn()) {
      this.props.getUser();
    }
  }

  render() {
    return (
      <div className="App">
        <React.Suspense fallback={<Spinner />}>
          <Main />
        </React.Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(actions.authActions.GetUser())
});

export default connect(null, mapDispatchToProps)(App);
