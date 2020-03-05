import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import { connect } from "react-redux";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top"
        >
          <div className="container">
            <Link className="navbar-brand" to="/">
              Streamy
            </Link>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    {/* <Link className="nav-link" to="/signup">
                      Sign Up
                    </Link> */}
                    <Modal />
                  </li>
                  {!this.props.isAuth && (
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Log In
                      </Link>
                    </li>
                  )}
                </ul>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
