import React, { Component } from "react";
import { Card, ResponsiveEmbed } from "react-bootstrap";
import "./VideoPlayer.css";
import ReactPlayer from "react-player";
import Spinner from "../Spinner/Spinner";
import { connect } from "react-redux";
import * as actions from "../../redux/actionCreators";

class VideoPlayer extends Component {
  render() {
    let display = <Spinner />;

    if (this.props.videoLink) {
      display = (
        <ResponsiveEmbed aspectRatio="16by9">
          <ReactPlayer
            url={this.props.videoLink}
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
                  origin: "http://localhost:3000"
                }
              }
            }}
          />
        </ResponsiveEmbed>
      );

      this.props.getPosts(this.props.videoLink.split("=")[1]);
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

const mapStateToProps = state => {
  let { videoLink, playVideo } = state.newVideoReducer;
  let { video } = state.randomVideoReducer;
  if (!videoLink) {
    videoLink = `https://www.youtube.com/watch?v=${video.id}`;
  }

  return { videoLink, playVideo };
};

const mapDispatchToProps = dispatch => ({
  getPosts: videoId => dispatch(actions.postActions.GetPosts(videoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
