import React, {Component} from 'react';
import ShoppingCart from "./ShoppingCart";
import './PlaceOrder.css'
import Button from "@material-ui/core/Button";
import {Route, withRouter} from 'react-router-dom';
import CustomerDetails from "./CustomerDetails";
import TextField from "@material-ui/core/TextField";

class PlaceOrder extends Component {


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
                <div className="placedOrderButton">
                    <Button variant="contained" color={"primary"}
                            style={{backgroundColor: "#0588f9"}} onClick={this.goToForm}>
                        PLACED ORDER</Button>
                </div>
                <div  style={{display: this.state.disabledCustomerForm ? 'block' : 'none'}}>
                    <div className="form" style={{marginLeft:"27em"}}>
                        <CustomerDetails />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(PlaceOrder)