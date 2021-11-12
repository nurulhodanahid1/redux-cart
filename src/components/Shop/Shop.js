import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import Product from '../Product/Product';

const Shop = (props) => {
    console.log(props)
    const {products, addToCart} = props;
    return (
        <div>
            <div style={{ float: "left" }}>
                {
                    products.map(pd => <Product product={pd} addToCart={addToCart} key={pd.id}></Product>)
                }
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products,
    }
}
const mapDispatchToProps = {
    addToCart : addToCart
}
// const connectToStore = connect(mapStateToProps, mapDispatchToProps);
// connectToStore(Shop)
// connect(mapStateToProps, mapDispatchToProps)(Shop)
export default connect(mapStateToProps, mapDispatchToProps)(Shop);