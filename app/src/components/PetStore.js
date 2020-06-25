import React from 'react';

const PetStore = props => {
    const {addItem}= props;
    return(
        <div>
            {props.petStore.map(item => {
                return(
                    <div>
                        <h6>{item.name}</h6>
                        <button onClick={() => addItem(item.id)}>Add to cart</button>
                    </div>
                )
            })}
        </div>
    )
}

export default PetStore;