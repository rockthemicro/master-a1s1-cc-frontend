import React, {Component} from "react";

import {withRouter} from "react-router-dom";
import {Nav, Navbar, NavItem, FormControl} from "react-bootstrap";

import './UserHomePage.css';

const Modal = ({handleClose, show, children}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button onClick={handleClose}>Submit</button>
            </section>
        </div>
    );
};


class UserHomePage extends Component {

    constructor(props) {
        super(props);

        this.showModal = this.showModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            username: this.props.location.state.username,
            show: false,
            sum: 0
        }
    }


    showModal = () => {
        this.setState({show: true});
    };

    handleSubmit = () => {
        //AICI TB FACUT CALL-ul dupa ce dam submit :D suma este pe state

        this.setState({show: false});
    };

    handleInputChange = (e) => {
        e.preventDefault();

        this.setState({
            sum: e.target.value
        })
    };

    openBids = () => {
        const location = {
            pathname: '/bids',
            state: {
                username: this.state.username
            }
        };
        this.props.history.push(location);
    };

    openAuctions = () => {
        const location = {
            pathname: '/auctions',
            state: {
                username: this.state.username
            }
        };
        this.props.history.push(location);
    };

    render() {
        return (
            <div>
                <div>
                    <Navbar>
                        <Nav>
                            <NavItem eventKey={0}>HOME</NavItem>
                            <NavItem eventKey={1} href={"/"}>LOG OUT</NavItem>
                            <NavItem eventKey={2} onClick={this.openBids}>MY BIDS</NavItem>
                            <NavItem eventKey={3} onClick={this.openAuctions}>MY AUCTIONS</NavItem>
                        </Nav>
                    </Navbar>
                </div>
                <h1>Welcome, {this.state.username}! Below you can find all of our auctions</h1>
                <div>
                    <div>
                        <hr/>
                        <span>Make VW, Model Passat, Variant 2.0 TDI, Year 2015, Mileage 15000km, Engine 2000cm3, Gearbox Manual, Traction 4x4</span>
                        <br/>
                        <div className="bid">
                            <span>Current bid $9000</span>
                            <button onClick={this.showModal}>BID</button>
                        </div>
                    </div>


                    <div>
                        <hr/>
                        <span>Make VW, Model Passat, Variant 2.0 TDI, Year 2015, Mileage 15000km, Engine 2000cm3, Gearbox Manual, Traction 4x4</span>
                        <br/>
                        <div className="bid">
                            <span>Current bid $9000</span>
                            <button onClick={this.showModal}>BID</button>
                        </div>
                    </div>

                    <div>
                        <hr/>
                        <span>Make VW, Model Passat, Variant 2.0 TDI, Year 2015, Mileage 15000km, Engine 2000cm3, Gearbox Manual, Traction 4x4</span>
                        <br/>
                        <div className="bid">
                            <span>Current bid $9000</span>
                            <button onClick={this.showModal}>BID</button>
                        </div>
                    </div>

                </div>

                <Modal show={this.state.show} handleClose={this.handleSubmit}>
                    <p>Please insert your sum</p>

                    <FormControl
                        placeholder="Please insert your sum"
                        onChange={this.handleInputChange}
                    />

                </Modal>
            </div>
        )
    }
}

export default withRouter(UserHomePage);