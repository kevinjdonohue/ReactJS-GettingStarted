import React, { Component } from 'react';
import Card from './card';

const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card {...card} />)}
        </div>
    );
};

export default CardList;