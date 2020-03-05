import React, { Component } from "react";
import { Row, Col, FormControl } from "react-bootstrap";
import Axios from "axios";
import { connect } from "react-redux";
import { searchVideo } from "../../redux/actionCreators/video";
class SearchBar extends Component {
  handleChange = e => {
    // console.dir(e.target);
    const input = e.target;
    input.value = e.target.value;
  };
  handleBlur = e => {
    e.target.value = "";
  };
  handleSubmit = async e => {
    if (e.keyCode === 13) {
      e.persist();

      try {
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

        this.props.searchVideo(response.data.items);
        e.target.value = "";
      } catch (error) {
        console.dir(error);

        e.target.value = "";
      }
    }
  };
  render() {
    return (
      <Row>
        <Col>
          <FormControl
            placeholder="search"
            style={{
              width: "70vw",
              minWidth: "220px",
              maxWidth: "600px"
            }}
            className="ml-1"
            as="input"
            type="text"
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            onKeyUp={this.handleSubmit}
          />
        </Col>
      </Row>
    );
  }
}
export default connect(null, { searchVideo })(SearchBar);
