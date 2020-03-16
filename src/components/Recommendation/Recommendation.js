import React, { Component } from "react";
import { Card } from "react-bootstrap";
import RecommendedItem from "../RecommendedItem/RecommendedItem";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";
class Recommendation extends Component {
  render() {
    return (
      <Card
        style={{
          padding: "0.5rem",
          backgroundColor: "#221E20"
        }}
      >
        {this.props.videos.map(video => {
          const { snippet, id } = video;
          const { title, thumbnails, description, publishedAt } = snippet;
          const { videoId } = id;
          return (
            <RecommendedItem
              comments={["comment1"]}
              videoLink={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              videoThumbnail={thumbnails.high.url}
              videoTitle={title}
              thumbHeight={thumbnails.high.height}
              thumbWidth={thumbnails.high.width}
              videoId={videoId}
              videoDescription={description}
              publishedAt={publishedAt}
              key={videoId + uuid()}
            />
          );
        })}
      </Card>
    );
  }
}
const mapStateToProps = entireState => {
  let videos = entireState.searchVideoReducer.videos;
  if (!videos.length) {
    videos = entireState.relatedVideoReducer.videos;
  }

  return { videos };
};
export default connect(mapStateToProps, {})(Recommendation);
