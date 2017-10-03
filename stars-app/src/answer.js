import React from 'react';

const Answer = (props) => {
    return (
        <div className="col-sm-4 text-center">
            {props.selectedNumbers.map((number, i) =>
                <span key={i}>{number}</span>
            )}
        </div>
    );
};

export default Answer;