import React, { Component } from "react";
import { Media } from "react-bootstrap";
import { connect } from "react-redux";
import { newVideo } from "../../redux/actionCreators/newVideo";
class RecommendedItem extends Component {
  playVideo = () => {
    this.props.newVideo("https://www.youtube.com/watch?v=c09m5f7Gnic");
  };
  render() {
    return (
      <Media>
        <img
          style={{
            height: "8rem",
            width: "15rem",
            borderRadius: "3px",
            cursor: "pointer"
          }}
          src="https://cdn2.f-cdn.com/contestentries/524172/18597985/5765fa2e0c62b_thumb900.jpg"
          alt="video thumbnail"
          onClick={this.playVideo}
        />
        <Media.Body>
          <h1 style={{ color: "black" }}>title</h1>
        </Media.Body>
      </Media>
    );
  }
}
// const mapStateToProps = entireState => {
//   return {};
// };
export default connect(null, { newVideo })(RecommendedItem);
