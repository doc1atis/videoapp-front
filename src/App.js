import React, { Component } from "react";
import { connect } from "react-redux";
import { checkTokenAndReturn } from "./axios";
import * as actions from "./redux/actionCreators";
import { randomVideo, relatedVideos } from "./redux/actionCreators/video";
import Spinner from "./components/Spinner/Spinner";
const Main = React.lazy(() => import("./components/Layout/Layout"));

class App extends Component {
  async componentDidMount() {
    const user = checkTokenAndReturn();
    if (user) {
      this.props.getUser();
    }
    // todo -> get id from user likedVideos
    await this.props.randomVideo();
    if (this.props.video.id) {
      this.props.relatedVideos(this.props.video.id);
      this.props.getPosts(this.props.video.id);
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

const mapStateToProps = state => ({
  video: state.randomVideoReducer.video
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(actions.authActions.GetUser()),
  randomVideo: () => dispatch(randomVideo()),
  relatedVideos: videoId => dispatch(relatedVideos(videoId)),
  getPosts: videoId => dispatch(actions.postActions.GetPosts(videoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
