import React from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'

const Cart = (props) => {
    const carItems = <ul className={classes['cart-items']} >
        {[{name : 'sushi', price : '12.99', id : 'm2', amount : '2'}].map(item => <li>{item.name}</li>)}
    </ul>

  return (
    <Modal onClose = {props.onClose}>
        {carItems}
        <div className={classes.total} >
            <span>Total Amount - </span>
            <span>$24.5</span>
        </div>
        <div className={classes.actions} >
            <button className={classes['button--alt']} onClick={props.onClose} >Close</button>
            <button className={classes.button} >Order</button>
        </div>
    </Modal>
  )
}

export default Cart