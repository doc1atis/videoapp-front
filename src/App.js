import React, { Component } from "react";
import { connect } from "react-redux";
import { checkTokenAndReturn, getUser } from "./axios";
import * as actions from "./redux/actionCreators";
import { randomVideo } from "./redux/actionCreators/video";
import Spinner from "./components/Spinner/Spinner";
const TemplatePage = React.lazy(() => import("./components/Template/Template"));

class App extends Component {
  componentDidMount() {
    if (checkTokenAndReturn()) {
      this.props.getUser();
    }
    this.props.randomVideo();
  }

  render() {
    return (
      <div className="App">
        <React.Suspense fallback={<Spinner />}>
          <TemplatePage />
        </React.Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(actions.authActions.GetUser()),
  randomVideo: () => dispatch(randomVideo())
});

export default connect(null, mapDispatchToProps)(App);
