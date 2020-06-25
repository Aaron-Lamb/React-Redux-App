export const initialState = {
   breed: '',
   petStore: [
    { name: 'Dry dog food', id: 1 },
    { name: 'Canned dog food', id: 2 },
    { name: 'Treats', id: 3 },
    { name: 'Bones', id: 4 },
    { name: 'Collars', id: 5 },
    { name: 'Chew toys', id: 6 },
    { name: 'Name tags', id: 7 }
],
cart: []
}


export const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_BREED":
            return {
                ...state,
                breed: action.payload
            }
        case "ADD_ITEM":
            return {
                ...state,
                petStore: state.petStore.filter(item => item.id !== action.payload),
                cart: [
                    ...state.cart,
                    state.petStore.filter(item => item.id === action.payload)[0]
                ]
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                petStore: [
                    ...state.petStore,
                    state.cart.filter(item => item.id === action.payload)[0]
                ],
                cart: state.petStore.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
}