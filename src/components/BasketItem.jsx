import React, { useContext } from 'react';
import { ShopContext } from '../context';

export default function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
    } = props;
    const { removeFromBasket, incQuantity, decQuantity } =
        useContext(ShopContext);

    return (
        <li className='collection-item'>
            {name} x
            <i
                className='material-icons basket-quantity'
                onClick={() => decQuantity(id)}
            >
                remove
            </i>
            {quantity}
            <i
                className='material-icons basket-quantity'
                onClick={() => incQuantity(id)}
            >
                add
            </i>{' '}
            = {price * quantity}$
            <span
                className='secondary-content'
                onClick={() => removeFromBasket(id)}
            >
                <i className='material-icons basket-delete'>close</i>
            </span>
        </li>
    );
}
