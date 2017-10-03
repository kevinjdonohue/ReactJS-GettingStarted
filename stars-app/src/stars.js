import React from 'react';
import _ from 'lodash';

const Stars = (props) => {
    const numberOfStars = 1 + Math.floor(Math.random()*9);

    return (
        <div className="col-sm-4 text-center">
            {_.range(numberOfStars).map(i => 
                <i key={i} className="fa fa-star fa-2x"></i>
            )}
            
        </div>
    );
};

export default Stars;