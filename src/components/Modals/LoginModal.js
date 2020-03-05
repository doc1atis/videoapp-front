import { Button, Modal, Form } from "react-bootstrap";
import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actionCreators";

class LoginModal extends React.Component {
  state = {
    show: false,
    username: "",
    password: ""
  };

  logout = () => {
    localStorage.removeItem("token");
    this.props.logout();
  };

  handleClose = () => this.setState({ show: false });

  handleShow = () => this.setState({ show: true });

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = async e => {
    e.preventDefault();

    let form = {
      password: this.state.password,
      username: this.state.username
    };
    try {
      await this.props.login(form);
    } catch (error) {
      console.log({ error });
    }
    this.handleClose();
  };

  render() {
    return (
      <>
        {!this.props.isAuth ? (
          <Button
            className="ml-2"
            variant="secondary"
            onClick={this.handleShow}
          >
            Login
          </Button>
        ) : (
          <Button className="ml-2" variant="secondary" onClick={this.logout}>
            Logout
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
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleSubmit}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth
});

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(actions.authActions.Login(data)),
  logout: () => dispatch(actions.authActions.Logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
