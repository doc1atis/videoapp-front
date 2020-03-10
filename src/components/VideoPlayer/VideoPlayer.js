import React, { Component } from "react";
import { Card, ResponsiveEmbed } from "react-bootstrap";
import "./VideoPlayer.css";
import ReactPlayer from "react-player";
import Spinner from "../Spinner/Spinner";
import { connect } from "react-redux";

class VideoPlayer extends Component {
  render() {
    let display = <Spinner />;

    if (this.props.video) {
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
const mapStateToProps = entireState => {
  let { video, playVideo } = entireState.newVideoReducer;
  if (!video) {
    video = entireState.randomVideoReducer.video;
  }

  return { video, playVideo };
};
export default connect(mapStateToProps, {})(VideoPlayer);
