import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import React from "react";
import history from './history';
import CustomerDetails from "./components/CustomerDetails"
import FetchBooksData from "./components/FetchBooksData";

export default function Routing() {
    return (
        <Router history={history}>
            <Route exact path="/">
                <FetchBooksData />
            </Route>
            <Route path="/summery">
                <CustomerDetails />
            </Route>
        </Router>
    );
}