import React, { Component } from 'react';
import Form from './form';
import CardList from './cardlist';
import axios from 'axios';

class App extends Component {
  state = {
    cards: []
  };

  componentDidMount() {
    this.getCard("kevinjdonohue");    
    this.getCard("devdaves");
    this.getCard("insikcho");
  }

  getCard(userName) {
    axios.get(`http://api.github.com/users/${userName}`)
    .then(response => {
      this.handleResponse(response);
    })
    .catch(error => {
      this.handleError(error);
    });
  }

  handleResponse(response) {
    this.setState(prevState => ({
      cards: prevState.cards.concat(response.data)
    }));
  }

  handleError(error) {
    console.log("An error occurred: " + error.response.status + " - " + error.response.statusText + " - " + error.response.request.responseURL);
  }

  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  }

  render() {
    return (
      <div id="getting-started-app">
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;