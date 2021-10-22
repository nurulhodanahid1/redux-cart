import React from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const products = [
        { name: "Lenovo Laptop", id: 1 },
        { name: "Asus Laptop", id: 2 },
        { name: "Dell Laptop", id: 3 },
        { name: "HP Laptop", id: 4 },
        { name: "Toshiba Laptop", id: 5 },
    ]
    return (
        <div>
            <div style={{ float: "left" }}>
                {
                    products.map(pd => <Product product={pd} key={pd.id}></Product>)
                }
            </div>
        </div>
    );
};

export default Shop;