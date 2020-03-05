import React, { Component } from "react";
import { Card } from "react-bootstrap";
import RecommendedItem from "../RecommendedItem/RecommendedItem";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
class Recommendation extends Component {
  render() {
    let display = null;
    if (this.props.videos.length > 0) {
      display = (
        <Card>
          {this.props.videos.map(video => {
            return (
              <RecommendedItem
                comments={["comment1"]}
                videoLink={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                videoThumbnail={video.snippet.thumbnails.high.url}
                videoTitle={video.snippet.title}
                thumbHeight={video.snippet.thumbnails.high.height}
                thumbWidth={video.snippet.thumbnails.high.width}
                key={video.id.videoId + uuidv4()}
              />
            );
          })}
        </Card>
      );
    }
    return display;
  }
}
const mapStateToProps = entireState => {
  return { videos: entireState.searchVideoReducer.videos };
};
export default connect(mapStateToProps, {})(Recommendation);
