import React from 'react';
import Item from './Item'

const Cart = props => {
    return(
        <div>
            {props.cart.map(item => {
                return(
                    <Item removeItem={props.removeItem} item={item} />
                )
            })}
        </div>
    )
}

export default Cart;