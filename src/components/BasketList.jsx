import React from 'react';
import BasketItem from './BasketItem';

export default function BasketList(props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
    } = props;

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
                        removeFromBasket={removeFromBasket}
                        {...item}
                    />
                ))
            ) : (
                <li className='collection-item'>Empty basket</li>
            )}

            <li className='collection-item active light-blue darken-1'>
                Total: {totalPrice}$
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
