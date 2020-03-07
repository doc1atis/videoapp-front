import React, { Component } from "react";
import { Card, ResponsiveEmbed } from "react-bootstrap";
import "./VideoPlayer.css";
import ReactPlayer from "react-player";
import Spinner from "../Spinner/Spinner";
import { connect } from "react-redux";
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
const mapStateToprops = entireState => {
  let { videoLink, playVideo } = entireState.newVideoReducer;
  if (!videoLink) {
    videoLink = `https://www.youtube.com/watch?v=${entireState.randomVideoReducer.video.id}`;
  }

  return { videoLink, playVideo };
};
export default connect(mapStateToprops, {})(VideoPlayer);
