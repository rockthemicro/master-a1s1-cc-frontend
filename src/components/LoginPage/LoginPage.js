import React, { Component } from 'react';
import LoginForm from './LoginForm';

import {withRouter} from "react-router-dom";

import './LoginPage.css';

class LoginPage extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.location.state);
  }


  render() {
    return (
      <div className="LoginPage">
        <LoginForm />
      </div>
    );
  }
}

export default withRouter(LoginPage);
