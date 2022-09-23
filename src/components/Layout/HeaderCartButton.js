import React, { useContext } from 'react'
import { CartContext } from '../../store/cart-context'
import classes from './HeaderCartButton.module.css'

export const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = 0;

  return (
    <button className={classes.button} onClick={props.onCartClick}>
        <span className={classes.icon}>
            <i class="fa-solid fa-cart-shopping"></i>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {totalAmount}
        </span>
    </button>
  )
}
