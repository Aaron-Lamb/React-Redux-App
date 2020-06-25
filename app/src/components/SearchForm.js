import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getBreed } from '../actions/index';;

const SearchForm = ({ getBreed, breed }) => {
    const [search, setSearch] = useState({
        breed: ''
    })

    const [results, setResults] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        getBreed(search.breed)
        setSearch({
            breed: ''
        })
    }

    const handleChange = event => {
        setSearch({
            [event.target.name]: event.target.value
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
               Pick a Breed <input name='breed' id='breed' value={search.breed} onChange={handleChange}/>
            </label>
            <button type='submit'>Submit</button>
            <div>
                <img src={breed} alt='Dog' />
            </div>
        </form>
    )
}

const mapStateToProps = state => {
    return{
        breed: state.breed
    };
}

export default connect(
    mapStateToProps,
    { getBreed }
)(SearchForm);