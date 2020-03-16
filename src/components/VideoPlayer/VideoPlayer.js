import React, { Component } from "react";
import { Card, ResponsiveEmbed } from "react-bootstrap";
import "./VideoPlayer.css";
import ReactPlayer from "react-player";
import Spinner from "../Spinner/Spinner";
import { connect } from "react-redux";
import * as actions from "../../redux/actionCreators";
import { randomVideo } from "../../redux/actionCreators/video";
class VideoPlayer extends Component {
  //   "https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
  // `https://www.youtube.com/watch?v=${this.props.video.id}`
  render() {
    let display = <Spinner />;
    if (this.props.video.id) {
      display = (
        <ResponsiveEmbed aspectRatio="16by9">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${this.props.video.id}`}
            controls
            playsinline
            width="100%"
            height="100%"
            pip
            playing={this.props.playVideo}
            className="embed-responsive-item"
            config={{
              youtube: {
                playerVars: {
                  modestbranding: 1,
                  fs: 0,
                  origin: window.location.origin,
                  showinfo: 0,
                  iv_load_policy: 3
                }
              }
            }}
          />
        </ResponsiveEmbed>
      );

      this.props.getPosts(this.props.video.id);
    }
    return (
      <Card
        style={{
          padding: "10px",
          marginBottom: "20px",
          width: "auto",
          height: "auto"
        }}
      >
        {display}
      </Card>
    );
  }
}

const mapStateToProps = entireState => {
  let { video, playVideo } = entireState.newVideoReducer;
  if (!video) {
    video = entireState.randomVideoReducer.video;
  }

  return { video, playVideo };
};

const mapDispatchToProps = dispatch => ({
  getPosts: videoId => dispatch(actions.postActions.GetPosts(videoId)),
  randomVideo: () => dispatch(randomVideo())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
