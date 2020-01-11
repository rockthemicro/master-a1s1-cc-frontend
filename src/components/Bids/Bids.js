import React, {Component} from 'react';

import {withRouter} from "react-router-dom";
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {AUCTION_URL} from "../../Common";
import axios from "axios";

class Bids extends Component {


    constructor(props) {
        super(props);
        this.state = {
            username: this.props.location.state.username,
            items: []
        };

    }

    openAuctions = () => {
        const location = {
            pathname: '/auctions',
            state: {
                username: this.state.username
            }
        };
        this.props.history.push(location);
    };

    openHome = () => {
        const location = {
            pathname: '/home',
            state: {
                username: this.state.username
            }
        };
        this.props.history.push(location);
    };

    componentDidMount() {
        let url = AUCTION_URL + "getUserBidAuctions?userName=" + this.state.username;

        axios.get(url)
            .then((response) => {
                debugger
                this.setState({
                    items: response.data
                })
            })
            .catch(() => {
                debugger
                alert('Could not retrieve auctions you bid on')
            })
    }

    render() {
        return (
            <div className="HomePage">
                <div>
                    <Navbar>
                        <Nav>
                            <NavItem eventKey={0} onClick={this.openHome}>HOME</NavItem>
                            <NavItem eventKey={1} href={"/"}>LOG OUT</NavItem>
                            <NavItem eventKey={2}>MY BIDS</NavItem>
                            <NavItem eventKey={3} onClick={this.openAuctions}>MY AUCTIONS</NavItem>
                        </Nav>
                    </Navbar>
                </div>
                <h1>Hello, {this.state.username} ! These are your bids</h1>
                <div className="scroller">
                    {
                        this.state.items.map(
                            ({ id, make, model, variant, year, mileage, engine, gearbox, traction, currentBid, status }) =>
                            {
                                return (
                                    <div className="item">
                                        <hr/>
                                        <span>Make {make}, Model {model}, Variant {variant}, Year {year}, Mileage {mileage}km, </span>
                                        <span>Engine {engine}cm3, Gearbox {gearbox}, Traction {traction}</span>
                                        <br/>
                                        <span>Current bid ${currentBid}</span>
                                        <br/>
                                        <span>Status {status}</span>
                                    </div>
                                );
                            }
                        )
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(Bids);
