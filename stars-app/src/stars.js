import React from 'react';

const Stars = (props) => {
    const numberOfStars = 1 + Math.floor(Math.random()*9);

    let stars = [];
    for (let i = 0; i < numberOfStars; i++) {
        stars.push(<i key={i} className="fa fa-star fa-2x"></i>)
    }

    return (
        <div className="col-sm-4 text-center">
            {stars}
        </div>
    );
}

export default Stars;