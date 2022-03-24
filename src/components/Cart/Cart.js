import React from 'react';

const Card = ({cart}) => {
    return (
        <div>
            <h1>hay i am card</h1>
            <p>Selected item: {cart.length}</p>
        </div>
    );
};

export default Card;