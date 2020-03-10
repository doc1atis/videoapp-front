import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../../redux/actionCreators";

class AddPost extends Component {
  state = {
    show: false,
    body: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    let payload = {
      body: this.state.body,
      videoId: this.props.videoLink
    };

    this.setState({ body: "", show: false });

    this.props.createPost(payload);
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label onClick={() => this.setState({ show: !this.state.show })}>
            {this.props.isAuth && (
              <Button variant={!this.state.show ? "primary" : "secondary"}>
                Add Comment
              </Button>
            )}
          </Form.Label>
          {this.state.show && (
            <div>
              <Form.Control
                as="textarea"
                rows="2"
                onChange={this.handleChange}
                name="body"
                value={this.state.body}
              />
              <br />
              <Button
                variant="secondary"
                className="mb-2"
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </div>
          )}
        </Form.Group>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  let { videoLink } = state.newVideoReducer;
  if (!videoLink) {
    videoLink = `https://www.youtube.com/watch?v=${state.randomVideoReducer.video.id}`;
  }
  return {
    videoLink: videoLink.split("v=")[1],
    isAuth: state.authReducer.isAuth
  };
};

const mapDispatchToProps = dispatch => ({
  createPost: data => dispatch(actions.postActions.CreatePost(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
