import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './MyNavBar.css';
import {
  withRouter
} from "react-router-dom";

class MyNavBar extends Component {
  constructor(props) {
    super(props);

    this.sugiaia = this.sugiaia.bind(this);
  }
  sugiaia = () => {
    const location = {
      pathname: '/login',
      state: {
        testProp: 'saluut'
      }
    }
    this.props.history.push(location);
  }

  render() {
    return (
      <div>
        <Navbar>
          <Nav pullRight>
            <NavItem eventKey={1} href="/">Home</NavItem>
            <NavItem eventKey={2} href="/login">Login</NavItem>
            <NavItem onSelect={this.sugiaia}>bla</NavItem>
            <NavItem>bla2</NavItem>
            <NavItem>bla3</NavItem>
            <NavItem>bla4</NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(MyNavBar);
