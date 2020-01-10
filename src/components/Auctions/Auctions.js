import React, {Component} from 'react';

import {withRouter} from "react-router-dom";
import {Nav, Navbar, NavItem} from "react-bootstrap";

class Auctions extends Component {


    constructor(props) {
        super(props);
        this.state = {
            username: this.props.location.state.username,
            items: []
        };

        for (var i = 0; i < 200; i++) {
            this.state.items.push({id: i, content: i});
        }
    }

    openBids = () => {
        const location = {
            pathname: '/bids',
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

    render() {
        return (
            <div className="HomePage">
                <div>
                    <Navbar>
                        <Nav>
                            <NavItem eventKey={0} onClick={this.openHome}>HOME</NavItem>
                            <NavItem eventKey={1} href={"/"}>LOG OUT</NavItem>
                            <NavItem eventKey={2} onClick={this.openBids}>MY BIDS</NavItem>
                            <NavItem eventKey={3}>MY AUCTIONS</NavItem>
                        </Nav>
                    </Navbar>
                </div>
                <h1>Hello, {this.state.username} ! this is auctions page</h1>
                <div className="scroller">
                    {
                        this.state.items.map(
                            ({id, content}) => {
                                return (
                                    <div className="item">
                                        <hr/>
                                        <span>Make VW, Model Passat, Variant 2.0 TDI, Year 2015, Mileage 15000km, Engine 2000cm3, Gearbox Manual, Traction 4x4</span>
                                        <br/>
                                        <span>Current bid $9000</span>
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

export default withRouter(Auctions);
