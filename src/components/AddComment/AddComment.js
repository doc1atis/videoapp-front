import React, { Component } from "react";
import "./AddComment.css";
import { connect } from "react-redux";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
import * as actions from "../../redux/actionCreators/";

class AddComment extends Component {
  state = {
    show: false,
    body: ""
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();

    let payload = {
      body: this.state.body,
      postId: this.props.postId
    };

    this.setState({ body: "", show: false });

    this.props.createComment(payload);
  };

  render() {
    return (
      <div className="AddComment">
        {this.state.show ? (
          <Form onSubmit={this.handleSubmit}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Reply..."
                aria-label="reply message"
                aria-describedby="basic-addon2"
                name="body"
                onChange={this.handleChange}
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" type="submit">
                  Reply
                </Button>
                <Button
                  variant="outline-primary"
                  onClick={() => this.setState({ show: !this.state.show })}
                >
                  Cancel
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        ) : (
          <div
            id="reply"
            onClick={() => this.setState({ show: !this.state.show })}
          >
            reply
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  createComment: data => dispatch(actions.commentActions.CreateComment(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
