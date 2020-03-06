import React, { Component } from "react";
import { Media, ResponsiveEmbed, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import {
  newVideo,
  relatedVideos,
  searchVideo
} from "../../redux/actionCreators/video";
import ReactPlayer from "react-player";
class RecommendedItem extends Component {
  playVideo = () => {
    this.props.searchVideo([]); // no request is sent
    this.props.relatedVideos(this.props.videoId); // request  is sent
    this.props.newVideo(this.props.videoLink); // no request is sent
    window.scrollTo(0, 0); // force the widow to scroll up
  };
  render() {
    return (
      <ListGroup.Item>
        <ListGroup.Item style={{ backgroundColor: "#F2F2F2" }}>
          <Media>
            <ResponsiveEmbed aspectRatio="16by9" style={{ maxWidth: "200px" }}>
              {/* <img
                src={this.props.videoThumbnail}
                height="inherit"
                width="100%"
                style={{ cursor: "pointer" }}
                onClick={this.playVideo}
              /> */}
              <ReactPlayer
                url={this.props.videoLink}
                height="100%"
                width="100%"
                light
                onClick={this.playVideo}
                playing={false}
                className="embed-responsive-item"
              />
            </ResponsiveEmbed>
            <Media.Body>
              <p
                className="ml-1"
                style={{
                  color: "black",
                  fontSize: "0.8rem",
                  lineHeight: "1.4rem",
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical"
                }}
              >
                {this.props.videoTitle}
              </p>
            </Media.Body>
          </Media>
        </ListGroup.Item>
      </ListGroup.Item>
    );
  }
}
// const mapStateToProps = entireState => {
//   return {};
// };
export default connect(null, { newVideo, relatedVideos, searchVideo })(
  RecommendedItem
);
