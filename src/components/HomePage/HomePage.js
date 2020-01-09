import React, { Component } from 'react';
import MyNavBar from '../NavBar/MyNavBar';

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

  render() {
    return (
      <div className="HomePage">
        <MyNavBar/>
        <h1>Soni Car Auctions</h1>
        <div className="scroller">
          {
            this.state.items.map(
              ({ id, content }) =>
              {
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

export default HomePage;
