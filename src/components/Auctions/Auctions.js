import React, {Component} from 'react';

import {withRouter} from "react-router-dom";
import {FormControl, Nav, Navbar, NavItem} from "react-bootstrap";
import {AUCTION_URL} from "../../Common";
import axios from "axios";
import './Auctions.css';

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

class Auctions extends Component {


    constructor(props) {
        super(props);
        this.state = {
            username: this.props.location.state.username,
            show: false,
            items: [],
            make: '',
            model: '',
            variant: '',
            year: '',
            mileage: '',
            engine: '',
            gearbox: '',
            traction: ''
        };

        this.showModal = this.showModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);

    }

    handleInputChange1 = (e) => {
        e.preventDefault();

        this.setState({
            make: e.target.value
        })
    };

    handleInputChange2 = (e) => {
        e.preventDefault();

        this.setState({
            model: e.target.value
        })
    };

    handleInputChange3 = (e) => {
        e.preventDefault();

        this.setState({
            variant: e.target.value
        })
    };

    handleInputChange4 = (e) => {
        e.preventDefault();

        this.setState({
            year: e.target.value
        })
    };

    handleInputChange5 = (e) => {
        e.preventDefault();

        this.setState({
            mileage: e.target.value
        })
    };

    handleInputChange6 = (e) => {
        e.preventDefault();

        this.setState({
            engine: e.target.value
        })
    };

    handleInputChange7 = (e) => {
        e.preventDefault();

        this.setState({
            gearbox: e.target.value
        })
    };

    handleInputChange8 = (e) => {
        e.preventDefault();

        this.setState({
            traction: e.target.value
        })
    };


    showModal = () => {
        this.setState({show: true});
    };

    handleSubmit = () => {
        let url = AUCTION_URL + "startAuction?userName=" + this.state.username + "&make=" + this.state.make
                + "&model=" + this.state.model + "&variant=" + this.state.variant + "&year=" + this.state.year
                + "&mileage=" + this.state.mileage + "&engine=" + this.state.engine + "&gearbox=" + this.state.gearbox
                + "&traction=" + this.state.traction;

        axios.get(url)
            .then((response) => {
                if (response.data === "OK") {
                    alert('Auction was successfully started')
                } else {
                    alert('Problem starting the auction')
                }
            })
            .catch(() => {
                alert('Could not start the auction')
            })
        this.setState({show: false});

        window.location.reload();
    };

    handleClose = () => {
        this.setState({show: false});
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

    componentDidMount() {
        let url = AUCTION_URL + "getUserCreatedAuctions?userName=" + this.state.username;

        axios.get(url)
            .then((response) => {
                this.setState({
                    items: response.data
                })
            })
            .catch(() => {
                alert('Could not retrieve auctions you created')
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
                            <NavItem eventKey={2} onClick={this.openBids}>MY BIDS</NavItem>
                            <NavItem eventKey={3}>MY AUCTIONS</NavItem>
                        </Nav>
                    </Navbar>
                </div>
                <h1>Hello, {this.state.username} ! These are your auctions</h1>
                <button onClick={this.showModal}>Create Auction</button>
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

                <Modal show={this.state.show} handleClose={this.handleClose} handleSubmit={this.handleSubmit}>
                    <p>Please enter the car details</p>

                    <FormControl
                        placeholder="Please insert car make"
                        onChange={this.handleInputChange1}
                    />
                    <FormControl
                        placeholder="Please insert car model"
                        onChange={this.handleInputChange2}
                    />
                    <FormControl
                        placeholder="Please insert car variant"
                        onChange={this.handleInputChange3}
                    />
                    <FormControl
                        placeholder="Please insert car year"
                        onChange={this.handleInputChange4}
                    />
                    <FormControl
                        placeholder="Please insert car mileage"
                        onChange={this.handleInputChange5}
                    />
                    <FormControl
                        placeholder="Please insert car engine"
                        onChange={this.handleInputChange6}
                    />
                    <FormControl
                        placeholder="Please insert car gearbox"
                        onChange={this.handleInputChange7}
                    />
                    <FormControl
                        placeholder="Please insert car traction"
                        onChange={this.handleInputChange8}
                    />

                </Modal>
            </div>
        );
    }
}

export default withRouter(Auctions);
