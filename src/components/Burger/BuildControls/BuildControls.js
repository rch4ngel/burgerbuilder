import React from 'react'

import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad'    , type: 'salad'},
    { label: 'Bacon'    , type: 'bacon'},
    { label: 'Cheese'   , type: 'cheese'},
    { label: 'Meat'     , type: 'meat'},
];


const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p><strong>Current Price: {props.totalPrice}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientSubracted(ctrl.type)}
                disabled={props.disabledInfo[ctrl.type]}
            />
        ))}
        <button className={classes.OrderButton} disabled={!props.canPurchase} onClick={props.ordering}>ORDER NOW</button>
    </div>
);

export default buildControls;