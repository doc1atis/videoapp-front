import { Button, Modal, Form } from "react-bootstrap";
import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actionCreators";

class UIModal extends React.Component {
  state = {
    show: false,
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleClose = () => this.setState({ show: false });

  handleShow = () => this.setState({ show: true });

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = async e => {
    e.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      console.log("password confirm doesn't match");
      return;
    }
    let form = {
      email: this.state.email,
      password: this.state.password,
      username: this.state.username
    };
    try {
      await this.props.register(form);
      localStorage.setItem("token", this.props.isAuth.token);
    } catch (error) {
      console.log({ error });
    }
    this.handleClose();
  };

  render() {
    return (
      <>
        {!this.props.isAuth && (
          <Button variant="primary" onClick={this.handleShow}>
            Sign Up
          </Button>
        )}

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group controlId="formGroupUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  onChange={this.handleChange}
                  name="username"
                  value={this.state.username}
                  placeholder="Enter username"
                />
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  onChange={this.handleChange}
                  name="email"
                  value={this.state.email}
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={this.handleChange}
                  name="password"
                  value={this.state.password}
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword2">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={this.handleChange}
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  placeholder="Confirm password"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleSubmit}>
              Sign Up
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.authReducer.isAuth
  };
};

const mapDispatchToProps = dispatch => ({
  register: data => dispatch(actions.authActions.Register(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(UIModal);
