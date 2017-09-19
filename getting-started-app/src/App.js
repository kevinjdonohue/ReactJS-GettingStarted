import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './form';
import CardList from './cardlist';

class App extends Component {
  state = {
    cards: [
      {
        name: "Paul O'Shannessy",
        avatar_url: "https://avatars1.githubusercontent.com/u/8445?v=4",
        company: "Facebook"
      },
      {
        name: "Kevin J Donohue",
        avatar_url: "https://avatars0.githubusercontent.com/u/6224840?v=4",
        company: "Alaska Airlines"
      },
      {
        name: "Insik Cho",
        avatar_url: "https://avatars3.githubusercontent.com/u/10120923?v=4",
        company: "Univera Inc."
      }
    ]
  };

  render() {
    return (
      <div>
        <Form />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
