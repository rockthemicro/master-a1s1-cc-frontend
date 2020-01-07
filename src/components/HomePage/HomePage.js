import React, { Component } from 'react';
import NavBar from '../NavBar/MyNavBar';

class HomePage extends Component {


  constructor(props) {
    super(props);
    this.state = {
      items: []
    }

    for (var i = 0; i < 200; i++) {
      this.state.items.push({id: i, content: i});
    }
  }

  render() {
    return (
      <div className="HomePage">
        <NavBar />
        <h1>Soni Car Auctions</h1>
        <div className="scroller">
          {
            this.state.items.map(
              ({ id, content }) =>
              {
                return (
                  <div className="item">
                    {id}
                    {content}
                    <button>Bid</button>
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
