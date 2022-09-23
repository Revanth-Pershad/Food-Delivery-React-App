import React from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
    const fixedPrice = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{fixedPrice}</div>
        </div>
        <div><MealItemForm /></div>
    </li>
  )
}

export default MealItem