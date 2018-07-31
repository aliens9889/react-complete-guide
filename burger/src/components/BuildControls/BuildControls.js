import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
]

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Current Price: <strong></strong></p>
    {controls.map(ctrl => (
      <BuildControl 
        key={ctrl.label}
        label={ctrl.label}
        type={ctrl.type}
        added={() => props.ingredientAdded(ctrl.type)}
         />
    ))}
    <button 
      className={classes.OrderButton}
      disabled={!props.purchasable}>ORDER NOW</button>
  </div>
);

export default buildControls;