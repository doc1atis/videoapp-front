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
    this.props.newVideo({
      id: this.props.videoId,
      snippet: {
        title: this.props.videoTitle,
        description: this.props.videoDescription,
        publishedAt: this.props.publishedAt
      }
    }); // no request is sent
    window.scrollTo(0, 0); // force the widow to scroll up
  };

  render() {
    return (
      <ListGroup.Item
        style={{
          backgroundColor: "#F2F2F2",
          marginBottom: "10px",
          borderRadius: "3px",
          paddingRight: "1px"
        }}
      >
        <Media>
          <div style={{ minWidth: "150px", height: "auto" }}>
            <ResponsiveEmbed aspectRatio="16by9">
              {/* <img
                src={this.props.videoThumbnail}
                height="inherit"
                width="100%"
                style={{ cursor: "pointer" }}
                onClick={this.playVideo}
              /> */}
              <ReactPlayer
                url={this.props.videoLink}
                playIcon={<></>}
                height="100%"
                width="100%"
                light
                onClick={this.playVideo}
                playing={false}
                className="embed-responsive-item"
                config={{
                  youtube: {
                    playerVars: {
                      modestbranding: 1,
                      fs: 0,
                      origin: "http://localhost:3000",
                      showinfo: 0,
                      enablejsapi: 1,
                      autohide: 1,
                      autoplay: 0,
                      iv_load_policy: 3,
                      widget_referrer: "http://localhost:3000"
                    }
                  }
                }}
              />
            </ResponsiveEmbed>
          </div>
          <Media.Body>
            <p
              style={{
                color: "black",
                fontSize: "0.8rem",
                lineHeight: "1.2rem",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                textTransform: "capitalize",
                textAlign: "left",
                paddingLeft: "0.5rem"
              }}
            >
              {this.props.videoTitle}
            </p>
          </Media.Body>
        </Media>
      </ListGroup.Item>
    );
  }
}
export default connect(null, { newVideo, relatedVideos, searchVideo })(
  RecommendedItem
);
