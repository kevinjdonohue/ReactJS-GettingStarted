import React, { Component } from 'react';
import Stars from './stars';
import Button from './button';
import Answer from './answer';
import Numbers from './numbers';

class Game extends Component {
    state = {
        selectedNumbers: [],
    };

    selectNumber = (clickedNumber) => {
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }));
    };

    render() {
        return (
            <div className="container">
                <div className="jumbotron text-center">
                    <h1>Play Nine</h1>
                </div>
                <div className="row">
                    <Stars />
                    <Button />
                    <Answer selectedNumbers={this.state.selectedNumbers} />                    
                </div>
                <br />
                <Numbers selectedNumbers={this.state.selectedNumbers} selectNumber={this.selectNumber} />
            </div>
        );
    }
}

export default Game;