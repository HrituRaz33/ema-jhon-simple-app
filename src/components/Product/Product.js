import React from 'react';

const Product = (props) => {
    const {name, img, seller, price, ratings} = props.product;
    return (
        <div>
            <h1>this is product</h1>
        </div>
    );
};

export default Product;