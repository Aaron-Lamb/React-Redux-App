import React from 'react';
import SearchForm from './components/SearchForm';
import PetStore from './components/PetStore';
import Cart from './components/Cart';
import './App.css'
import { connect } from 'react-redux';
import { addItem, removeItem } from './actions/index';

function App(props) {
  const {addItem, removeItem, cart, petStore } = props;

  const addCart = item => {
    addItem(item)
  }

  const removeCart = item => {
    removeItem(item)
  }

  return (
    <div className="App">
        <SearchForm />
        <PetStore petStore={petStore} addItem={addCart}/>
        <Cart cart={cart} removeItem={removeCart} />
    </div>
  );
}

const mapStateToProps = state => {
  return{
    petStore: state.petStore,
    cart: state.cart
  }
}

const mapDispatchToProps = { addItem, removeItem };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
