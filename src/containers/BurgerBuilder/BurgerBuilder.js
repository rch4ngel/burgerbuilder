import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            'bread-top'     : 1,
            'salad'         : 1,
            'bacon'         : 1,
            'cheese'        : 2,
            'meat'          : 2,
            'bread-bottom'  : 1
        }
    };

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>TODO: Build Control Component</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;