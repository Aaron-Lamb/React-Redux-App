import React from 'react';

const Item = props => {
    const {removeCart} = props;
    return(
        <div>
            <h6>{props.item.name}</h6>
            <button onClick={() => removeCart(props.item.id)}>X</button>
        </div>
    )
}

export default Item;