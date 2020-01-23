import React, {Component} from 'react';
import ShoppingCart from "./ShoppingCart";
import './PlaceOrder.css'
import Button from "@material-ui/core/Button";

class PlaceOrder extends Component {

    render() {
        return (
            <div>
                <div className="scroll" style={{}}>
                    <ShoppingCart/>
                </div>
                <div className="placedOrderButton">
                    <Button  variant="contained" color={"primary"} style={{backgroundColor: "#0588f9"}}>
                        PLACED ORDER</Button>
                </div>

            </div>
        );
    }
}

export default PlaceOrder;