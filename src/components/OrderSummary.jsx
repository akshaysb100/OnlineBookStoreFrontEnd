import React, {Component} from 'react';
import ShoppingCart from "./ShoppingCart";
import './PlaceOrder.css'

class OrderSummary extends Component {


    constructor(props) {
        super(props);
        this.state = {
            disabledCustomerForm: false
        }
    }

    goToForm = (event) => {
        this.setState({disabledCustomerForm: true})
    }

    render() {
        return (
            <div>
                <div className="scroll" style={{}}>
                    <ShoppingCart/>
                </div>

            </div>
        );
    }
}

export default OrderSummary