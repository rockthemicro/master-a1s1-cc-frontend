import React, { Component } from 'react';
import MyNavBar from '../NavBar/MyNavBar';
import {AUCTION_URL} from "../../Common";
import axios from 'axios';

class HomePage extends Component {


  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    for (var i = 0; i < 200; i++) {
      this.state.items.push({id: i, content: i});
    }
  }

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
      <div className="HomePage">
        <MyNavBar/>
        <h1>Soni Car Auctions</h1>
        <div className="scroller">
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
                    <span>Current bid ${currentBid}</span>
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

export default HomePage;
