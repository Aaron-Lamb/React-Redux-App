import React from 'react';

const Item = props => {
    const {removeItem} = props;
    return(
        <div>
            <h6>{props.item.name}</h6>
            <button onClick={() => removeItem(props.item.id)}>X</button>
        </div>
    )
}

export default Item;