import React, { Component } from "react";
import { Card, ResponsiveEmbed } from "react-bootstrap";
import "./VideoPlayer.css";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
class VideoPlayer extends Component {
  render() {
    return (
      <Card
        style={{
          padding: "10px",
          marginBottom: "20px",
          width: "auto",
          height: "auto"
        }}
      >
        <ResponsiveEmbed aspectRatio="16by9">
          <ReactPlayer
            url={this.props.videoLink}
            controls
            width="100%"
            height="100%"
            pip
          />
        </ResponsiveEmbed>
      </Card>
    );
  }
}
const mapStateToprops = entireState => {
  console.log(entireState);
  return { videoLink: entireState.newVideoReducer.videoLink };
};
export default connect(mapStateToprops, {})(VideoPlayer);
