import React, { Component } from "react";
import { Card, ResponsiveEmbed } from "react-bootstrap";
import "./VideoPlayer.css";
import ReactPlayer from "react-player";
import Spinner from "../Spinner/Spinner";
import { connect } from "react-redux";

class VideoPlayer extends Component {
  render() {
    let display = <Spinner />;

    if (this.props.currentPlayingLink) {
      display = (
        <ResponsiveEmbed aspectRatio="16by9">
          <ReactPlayer
            url={this.props.currentPlayingLink}
            controls
            width="100%"
            height="100%"
            pip
            playing={this.props.playVideo}
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
const mapStateToProps = state => {
  let { currentPlayingLink, playVideo } = state.newVideoReducer;

  return { currentPlayingLink, playVideo };
};
export default connect(mapStateToProps, {})(VideoPlayer);
