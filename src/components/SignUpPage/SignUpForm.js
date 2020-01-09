import React, { Component } from 'react';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';

import {withRouter} from "react-router-dom";

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

class SignUpForm extends Component {

    constructor(props) {
        super(props);
        this.getEmail = this.getEmail.bind(this);
        this.getUsername = this.getUsername.bind(this);
        this.getPassword = this.getPassword.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);

        this.state = {
            email: "",
            username: "",
            password: ""
        }
    }

    handleFormSubmit(e) {
        e.preventDefault();

        console.log(this.state.email + " " + this.state.username + " " + this.state.password);

        this.props.history.push("/");
    };

    getEmail(e) {
        e.preventDefault();

        this.setState({
            email: e.target.value
        });
    }

    getUsername(e) {
        e.preventDefault();

        this.setState({
            username: e.target.value
        });
    }

    getPassword(e) {
        e.preventDefault();

        this.setState({
            password: e.target.value
        });
    }

    render() {
        return (
            <div style={divStyle}>
                <Panel style={panelStyle}>
                    <Form horizontal className="SignUpForm" id="signUpForm">
                        <FormGroup controlId="signUpFormEmail">
                            <label>Email address</label>
                            <FormControl type="email" placeholder="Email Address" onChange={this.getEmail}/>
                        </FormGroup>
                        <FormGroup controlId="signUpFormUserId">
                            <label>Username</label>
                            <FormControl type="text" placeholder="Username" onChange={this.getUsername}/>
                        </FormGroup>
                        <FormGroup controlId="signUpFormPassword">
                            <label>Password</label>
                            <FormControl type="password" placeholder="Password" onChange={this.getPassword}/>
                        </FormGroup>
                        <FormGroup style={buttonStyle} controlId="signUpFormSubmit">
                            <Button bsStyle="primary" type="submit" onClick={this.handleFormSubmit}>
                                SignUp
                            </Button>
                        </FormGroup>
                    </Form>
                </Panel>
            </div>
        )
    }
}

export default withRouter(SignUpForm);