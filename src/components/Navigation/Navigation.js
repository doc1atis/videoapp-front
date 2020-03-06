import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import RegisterModal from "../Modals/RegisterModal";
import LoginModal from "../Modals/LoginModal";
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
            <SearchBar />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <ul className="navbar-nav">
                  <RegisterModal />

                  <li className="nav-item">
                    <LoginModal />
                  </li>
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
