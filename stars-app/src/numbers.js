import React from 'react';

const Numbers = (props) => {
    const arrayOfNumbers = Array.from(Array(10).keys());
    arrayOfNumbers.map(x => x++);

    return (
        <div className="card text-center">
            <div>
                <span>1</span>
                <span className="selected">2</span>
                <span className="used">3</span>
            </div>
        </div>
    );
}

export default Numbers;