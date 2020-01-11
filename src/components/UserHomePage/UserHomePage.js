import React, {Component} from "react";

import {withRouter} from "react-router-dom";
import {Nav, Navbar, NavItem, FormControl} from "react-bootstrap";

import './UserHomePage.css';
import {AUCTION_URL} from "../../Common";
import axios from "axios";

const Modal = ({handleSubmit, handleClose, show, children}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button onClick={handleClose}>Close</button>
                <span> </span>
                <button onClick={handleSubmit}>Submit</button>
            </section>
        </div>
    );
};


class UserHomePage extends Component {

    constructor(props) {
        super(props);

        this.showModal = this.showModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            username: this.props.location.state.username,
            show: false,
            sum: 0,
            auctionItemId: 0,
            items: []
        }
    }


    showModal = (e) => {
        this.setState({show: true, auctionItemId: e.target.id});
    };

    handleSubmit = () => {
        //AICI TB FACUT CALL-ul dupa ce dam submit :D suma este pe state
        var url = AUCTION_URL + "placeBid?userName=" + this.state.username + "&auctionItemId="
                + this.state.auctionItemId + "&bid=" + this.state.sum;

        axios.get(url)
            .then((response) => {
                if (response.data !== "OK") {
                    alert('Place bid failed with error ' + response.data);
                }
            })
            .catch(() => {
                alert('Could not place bid')
            })
        this.setState({show: false});
    };

    handleClose = () => {
        this.setState({show: false});
    }

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

    componentDidMount() {
        var url = AUCTION_URL + "getAuctions";

        axios.get(url)
            .then((response) => {
                this.setState({
                    items: response.data
                })
            })
            .catch(() => {
                alert('Could not retrieve auctions')
            })
    }

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
                    {
                        this.state.items.map(
                            ({ id, make, model, variant, year, mileage, engine, gearbox, traction, currentBid }) =>
                            {
                                return (
                                    <div className="item">
                                        <hr/>
                                        <span>Make {make}, Model {model}, Variant {variant}, Year {year}, Mileage {mileage}km, </span>
                                        <span>Engine {engine}cm3, Gearbox {gearbox}, Traction {traction}</span>
                                        <br/>
                                        <div className="bid">
                                            <span>Current bid ${currentBid}</span>
                                            <button id={id} onClick={this.showModal}>BID</button>
                                        </div>
                                    </div>
                                );
                            }
                        )
                    }
                </div>

                <Modal show={this.state.show} handleClose={this.handleClose} handleSubmit={this.handleSubmit}>
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