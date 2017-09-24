import React from 'react';

const Card = (props) => {
    return (
        <div style={{margin: '1em'}}>
            <img width="100" alt={props.name} src={props.avatar_url} />
            <div style={{display: 'inline-block', marginLeft: 10, verticalAlign: 'top'}}>
                <div style={{fontSize: '1.35em', fontWeight: 'bold'}}>
                    {props.name}
                </div>
                <div style={{fontSize: '1.25em'}}>
                    {props.company}
                </div>
            </div>
        </div>
    );
};

export default Card;