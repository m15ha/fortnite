import React, { useContext } from 'react';
import {ShopContext} from '../context'

export default function Cart(props) {
    const {example} = useContext(ShopContext);

    const { quantity = 0, handleBasketShow = Function.prototype } = props;
    return (
        <div
            className='cart blue darken-3 white-text'
            onClick={handleBasketShow}
        >
            <i className='material-icons'>shopping_cart</i>
            {quantity ? (
                <span className='cart-quantity'>{quantity}</span>
            ) : null}
        </div>
    );
}
