import React, { Component } from "react";
import { Row, Col, FormControl } from "react-bootstrap";
import Axios from "axios";
import { connect } from "react-redux";
import { searchVideo } from "../../redux/actionCreators/video";
class SearchBar extends Component {
  handleChange = e => {
    const input = e.target;
    input.value = e.target.value;
  };
  handleBlur = e => {
    e.target.value = "";
  };
  handleSubmit = async e => {
    e.persist();
    if (e.keyCode === 13 && e.target.value) {
      try {
        //   search for videos
        const response = await Axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              part: "snippet",
              maxResults: 5,
              q: e.target.value,
              key: process.env.REACT_APP_API_KEY
            }
          }
        );
        // put the videos into the state(a reducer)
        this.props.searchVideo(response.data.items);
        e.target.value = "";
        window.scrollTo(0, 0);
      } catch (error) {
        console.dir(error);

        e.target.value = "";
      }
    }
  };
  render() {
    return (
      <FormControl
        placeholder="search"
        style={{
          width: "70vw",
          minWidth: "220px",
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto"
        }}
        as="input"
        type="text"
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        onKeyUp={this.handleSubmit}
      />
    );
  }
}

export default connect(null, { searchVideo })(SearchBar);
