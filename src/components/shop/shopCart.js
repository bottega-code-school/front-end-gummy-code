import React, { Component } from 'react';

class ShopCart extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={`${className} shop-cart`}>
                cart....
            </div>
        )
    }
}

export default ShopCart;