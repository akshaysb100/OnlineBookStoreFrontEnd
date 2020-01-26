import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React from "react";
import history from "./history";
import FetchBooksData from "./components/FetchBooksData";
import PlaceOrder from "./components/PlaceOrder";
import OrderSummary from "./components/OrderSummary";
import OrderConfirmation from "./components/OrderConfirmation";

export default function Routing() {
    return (
        <Router history={history}>
            {/*<MyToolBar/>*/}
            <Route exact path="/">
                <FetchBooksData/>
            </Route>
            <Route path="/summary">
                <PlaceOrder/>
            </Route>
            <Route path="/orderConfirmation">
                <OrderConfirmation/>
            </Route>
        </Router>
    );
}
