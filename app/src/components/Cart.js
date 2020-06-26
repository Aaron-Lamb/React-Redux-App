import React from 'react';
import Item from './Item'

const Cart = props => {
    return(
        <div>
            {props.cart.map(item => {
                return(
                    <Item removeCart={props.removeCart} item={item} />
                )
            })}
        </div>
    )
}

export default Cart;