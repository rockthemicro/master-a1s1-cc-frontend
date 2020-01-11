import React, { Component } from 'react';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';

import {withRouter} from "react-router-dom";
import {USER_URL} from "../../Common";

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: -100
};

const panelStyle = {
  backgroundColor: 'rgba(255,255,255,0.5)',
  border: 0,
  paddingLeft: 20,
  paddingRight: 20,
  width: 300,
};

const buttonStyle = {
  marginBottom: 0
};

class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.getUsername = this.getUsername.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      username: "",
      password: ""
    }
  }

  handleFormSubmit(e) {
    e.preventDefault();

    console.log("FORM SUBMIT! " + this.state.username + "   " + this.state.password);

    var url = USER_URL + "/login?userName=" + this.state.username + "&password=" + this.state.password;
    axios.get(url)
        .then((response) => {
          if (response.data === "OK") {

            const location = {
              pathname: '/home',
              state: {
                username: this.state.username
              }
            };
            this.props.history.push(location);

          } else {
            alert('Invalid username and/or password')
          }
        })
        .catch(() => {
          alert('Could not send request')
        })
  }

  getUsername(e) {
    e.preventDefault();

    this.setState({
      username: e.target.value
    })
  }

  getPassword(e) {
    e.preventDefault();

    this.setState({
      password: e.target.value
    })
  }

  render() {
    return (
      <div style={divStyle}>
        <Panel style={panelStyle}>
          <Form horizontal className="LoginForm" id="loginForm">
            <FormGroup controlId="form">
              <label>Username</label>
              <FormControl type="text" placeholder="Username" onChange={this.getUsername}/>
            </FormGroup>
            <FormGroup controlId="formPassword">
              <label>Password</label>
              <FormControl type="password" placeholder="Password" onChange={this.getPassword}/>
            </FormGroup>
            <FormGroup style={buttonStyle} controlId="formSubmit">
              <Button bsStyle="primary" type="submit" onClick={this.handleFormSubmit}>
                Login
              </Button>
            </FormGroup>
          </Form>
        </Panel>
      </div>
    )
  }
}

export default withRouter(LoginForm);
