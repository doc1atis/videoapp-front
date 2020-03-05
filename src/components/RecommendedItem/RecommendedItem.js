import React, { Component } from "react";
import { Media, ResponsiveEmbed, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { newVideo } from "../../redux/actionCreators/video";

class RecommendedItem extends Component {
  render() {
    return (
      <ListGroup.Item>
        <ListGroup.Item>
          <Media>
            <ResponsiveEmbed aspectRatio="16by9" style={{ maxWidth: "200px" }}>
              <img
                alt=""
                src={this.props.videoThumbnail}
                height="inherit"
                width="100%"
                style={{ cursor: "pointer" }}
                onClick={() => this.props.newVideo(this.props.videoLink)}
              />
            </ResponsiveEmbed>
            <Media.Body>
              <p style={{ color: "black", fontSize: "1rem" }}>
                {this.props.videoTitle}
              </p>
            </Media.Body>
          </Media>
        </ListGroup.Item>
      </ListGroup.Item>
    );
  }
}
// const mapStateToProps = state => {
//   return {
//     videoLink: state.newVideoReducer.videoLink
//   };
// };

export default connect(null, { newVideo })(RecommendedItem);
