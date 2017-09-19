import React, { Component } from 'react';

class Form extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Event: Form Submit", this.userNameInput.value);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref={(input) => this.userNameInput = input} placeholder="Github username" required />
                <button type="submit">Add card</button>
            </form>
        );
    }
}

export default Form;