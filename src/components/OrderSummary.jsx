import React, {Component} from 'react';
import ShoppingCart from "./ShoppingCart";
import './PlaceOrder.css'
import Button from "@material-ui/core/Button";
import {Route, withRouter} from 'react-router-dom';
import CustomerDetails from "./CustomerDetails";


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