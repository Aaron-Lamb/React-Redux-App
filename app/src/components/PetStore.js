import React from 'react';

const PetStore = props => {
    const {addCart}= props;
    return(
        <div>
            {props.petStore.map(item => {
                return(
                    <div>
                        <h6>{item.name}</h6>
                        <button onClick={() => addCart(item.id)}>Add to cart</button>
                    </div>
                )
            })}
        </div>
    )
}

export default PetStore;