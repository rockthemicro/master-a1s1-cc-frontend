import React, {Component} from 'react';
import SignUpForm from './SignUpForm';

import {withRouter} from "react-router-dom";

import './SignUpPage.css';

class SignUpPage extends Component {


    render() {
        return (
            <div className="SignUpPage">
                <SignUpForm />
            </div>
        );
    }
}

export default withRouter(SignUpPage);