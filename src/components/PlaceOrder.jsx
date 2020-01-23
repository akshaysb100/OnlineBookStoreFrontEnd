import React, {Component} from 'react';
import ShoppingCart from "./ShoppingCart";
import './fetchBookdata.css'
import './tooltip.css'

class PlaceOrder extends Component {

    render() {
        return (
            <div>
                <div>
                    <ShoppingCart/>
                </div>
                <div>
                    <button hight="50%">PLACE ORDER</button>
                </div>

            </div>
        );
    }
}

export default PlaceOrder;