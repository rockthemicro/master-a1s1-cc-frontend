import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './MyNavBar.css';
import {
  withRouter
} from "react-router-dom";

class MyNavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar>
          <Nav>
            <NavItem eventKey={1} href="/login">Log In</NavItem>
            <NavItem eventKey={2} href="/signUp">Sign Up</NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(MyNavBar);
