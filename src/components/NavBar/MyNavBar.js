import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './MyNavBar.css';

class MyNavBar extends Component {
  sugiaia = () => {
    alert("mama");
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

export default MyNavBar;
