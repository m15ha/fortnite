import React, { useContext } from 'react';
import { ShopContext } from '../context';
import BasketItem from './BasketItem';

export default function BasketList() {

    const { order = [], handleBasketShow = Function.prototype } =
        useContext(ShopContext);

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);
    return (
        <ul className='collection basket-list'>
            <li className='collection-item active light-blue darken-2'>
                Basket
            </li>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        key={item.id}
                        {...item}
                    />
                ))
            ) : (
                <li className='collection-item'>Empty basket</li>
            )}

            <li className='collection-item active light-blue darken-1'>
                Total: {totalPrice}$
                <span className="secondary-content">Checkout</span>
            </li>
            <i
                className='material-icons basket-close'
                onClick={handleBasketShow}
            >
                close
            </i>
        </ul>
    );
}
