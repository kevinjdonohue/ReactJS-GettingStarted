import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    state = {userName: ''}

    handleSubmit = (event) => {
        event.preventDefault();        
        axios.get(`http://api.github.com/users/${this.state.userName}`)
            .then(response => {               
                this.props.onSubmit(response.data); //the onSubmit function here is the addNewCard function that was pased in by the App component
                this.setState({userName: ''});  //this clears out the local state's userName variable after the new card is added
            })
            .catch(error => {
                console.log("An error occurred: " + error.response.status + " - " + error.response.statusText + " - " + error.response.request.responseURL);
            });
    };

    render() {
        // overall: this renders an HTML form with an onSubmit handler with a textbox with an onChange handler
        // the onSubmit handler invokes the local handleSubmit function
        // the onChange handler sets the local state's userName variable to the entered value 
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                value={this.state.userName} 
                onChange={(event) => this.setState({userName: event.target.value})} 
                placeholder="Github username" required />
                <button type="submit">Add card</button>
            </form>
        );
    }
}

export default Form;