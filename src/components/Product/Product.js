import React from 'react';

const Products = (props) => {
    const {addToCart} = props;
    const {name, id} = props.product;
    return (
        <div style={{border:"2px solid tomato", margin:"10px", padding:"10px", width:"300px"}}>
            <h3>{name}</h3>
            <button onClick={()=>addToCart(id, name)}>Add to cart</button>
        </div>
    );
};

export default Products;