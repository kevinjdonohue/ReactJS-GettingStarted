import React, { Component } from 'react';
import Form from './form';
import CardList from './cardlist';

class App extends Component {
  state = {
    cards: []
  };

  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  }

  render() {
    return (
      <div id="gettting-started-app">        
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;