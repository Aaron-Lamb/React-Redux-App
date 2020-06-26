import axios from 'axios';

export const getBreed = (newBreed) => dispatch => {
    axios.get(`https://dog.ceo/api/breed/${newBreed}/images`)
    .then(response => {
        dispatch({ type: "GET_BREED", payload: response.data.message[1]})
                })
    .catch(error => console.log(error));
}

export const addItem = newItem => {
    return { type: "ADD_ITEM", payload: newItem }
}

export const removeItem = oldItem => {
    return { type: "REMOVE_ITEM", payload: oldItem }
}