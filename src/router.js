import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import React from "react";
import history from './history';
import ShoppingCart from "./components/ShoppingCart";
import FetchBooksData from "./components/FetchBooksData";
import MyToolBar from "./components/MyToolBar";
import CustomerDetails from "./components/CustomerDetails";

export default function Routing() {
    return (
        <Router history={history}>
            <MyToolBar/>
            <Route exact path="/">
                <FetchBooksData />
            </Route>
            <Route path="/summery">
                <ShoppingCart />
            </Route>
            <Route path="/customerDetails">
                <CustomerDetails />
            </Route>
        </Router>
    );
}