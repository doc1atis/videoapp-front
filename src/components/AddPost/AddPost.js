import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { createPost } from "../../axios";
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
      videoId: this.props.currentPlayingLink,
    };

    this.props.createPost(payload);
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {

    return (
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label onClick={() => this.setState({ show: !this.state.show })}>
            <Button variant="primary">Add Comment</Button>
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
              <Button variant="secondary" onClick={this.handleSubmit}>
                Submit
              </Button>
            </div>
          )}
        </Form.Group>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  currentPlayingLink: state.newVideoReducer.currentPlayingLink.split("v=")[1]
});

const mapDispatchToProps = dispatch => ({
  createPost: data => dispatch(actions.postActions.CreatePost(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
