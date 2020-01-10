import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import UserHomePage from './components/UserHomePage/UserHomePage';
import BidsPage from './components/Bids/Bids';
import AuctionsPage from './components/Auctions/Auctions';
import './App.css';

const Home = () => (
  <HomePage />
);

const Login = () => (
  <LoginPage />
);

const SignUp = () => (
  <SignUpPage />
);

const UserHome = () => (
    <UserHomePage />
);

const Bids = () => (
    <BidsPage />
);

const Auctions = () => (
    <AuctionsPage />
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/home" component={UserHome} />
          <Route path="/bids" component={Bids} />
          <Route path="/auctions" component={Auctions} />
        </div>
      </Router>
    );
  }
}

export default App;
