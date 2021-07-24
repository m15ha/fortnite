import React from 'react';

export default function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity,
        decQuantity,
    } = props;
    return (
        <li className='collection-item'>
            {name} x
            <i
                class='material-icons basket-quantity'
                onClick={() => decQuantity(id)}
            >
                remove
            </i>
            {quantity}
            <i
                class='material-icons basket-quantity'
                onClick={() => incQuantity(id)}
            >
                add
            </i>{' '}
            = {price * quantity}$
            <span
                class='secondary-content'
                onClick={() => removeFromBasket(id)}
            >
                <i className='material-icons basket-delete'>close</i>
            </span>
        </li>
    );
}
