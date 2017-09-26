import React, { Component } from 'react';
import Stars from './stars';
import Button from './button';
import Answer from './answer';
import Numbers from './numbers';

class Game extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron text-center">
                    <h1>Play Nine</h1>
                </div>
                <div className="row">
                    <Stars />
                    <Button />
                    <Answer />                    
                </div>
                <br />
                <Numbers />
            </div>
        );
    }
}

export default Game;