import React, { useReducer } from 'react'
import { CartContext } from './cart-context'

const intialCart = {
    item : [],
    amount : 0
}

const cartReducer = (prevState, action) => {
    switch(action.type){
        case 'ADD' :
            const updatedItems = prevState.item.concat(action.item);
            const updatedAmount = prevState.amount + action.item.amount * action.item.price;
            return {updatedItems, updatedAmount};

        case 'REMOVE':
            const removedItems = prevState.item.filter((prevItem) => (prevItem.id != action.id));
            const removedAmount = prevState.amount - action.item.amount;
            return {removedItems, removedAmount};

        default :
            return prevState;
    }
}

const CartProvider = (props) => {
    const [state, dispatch] = useReducer(intialCart, cartReducer);

    const addItemToTheCart = (name) => {
        dispatch({type : 'ADD', item : name})
    }

    const removeItemFromTheCart = (id) =>{
        dispatch({type : 'REMOVE', id : id})
    }

    const cartContext = {
        item : state.item,
        total : state.total,
        addItem : addItemToTheCart,
        removeItem : removeItemFromTheCart
    }

  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider