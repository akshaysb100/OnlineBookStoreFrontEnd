import React from "react";
import {withRouter} from "react-router-dom";
import "./tooltip.css";
import "./fetchBookdata.css";
import ToolBar from "./MyToolBar";

class FetchBooksData extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        clicks: 0,
        loading: true,
        person: [],
        listShoppingCart: [],disabledCheckoutButton: false,
    };

    goToCart = event => {
        document.activeElement.style.backgroundColor = "#0588f9";
        document.activeElement.innerHTML = "ADDED TO BAG";
        let value = 0;
        this.setState({disabledCheckoutButton: true});
        if (localStorage.getItem("abc") == null) {
            this.state.listShoppingCart.push(event);
            localStorage.setItem("abc", JSON.stringify(this.state.listShoppingCart));
        } else {
            let data = JSON.parse(localStorage.getItem("abc"));
            let siz = JSON.parse(localStorage.getItem("abc")).length;
            for (let i = 0; i < siz; i++) {
                if (JSON.parse(localStorage.getItem("abc"))[i].id == event.id) {
                    value = 1;
                }
            }
            if (value == 0) {
                console.log(data);
                data.push(event);
                this.state.listShoppingCart = data;
                localStorage.setItem(
                    "abc",
                    JSON.stringify(this.state.listShoppingCart)
                );
            }
        }
    };

    async componentDidMount() {
        const url = "http://3.135.204.220:8080/books/showBooks";
        const response = await fetch(url);
        const data = await response.json();
        let keys = Object.keys(data);
        this.setState({person: data, loading: false});
        console.log(this.state.person);
    }

    handleChildData = dataFromChild => {
        this.setState({person: dataFromChild});
    };

    render() {
        var Books = this.state.person.map((item, i) => {
            console.log("keys" + JSON.stringify(item));

            return (
                <div className="div">
                    <div className="card">
                        <div className="tooltip">
              <span className="tooltiptext">
                <h5 style={{color: "black"}}>Book Detail</h5>
                  {item.description}
              </span>
                            <div className="imageSpace">
                                <img className="bookImg" src={item.image} alt={"bookImg"}></img>
                            </div>
                            <div className="bookName">{item.title}</div>
                            <div className="authorName">{item.author}</div>
                            <div className="bookName">Rs.{item.price}</div>
                            <button
                                className="buttonBuyNow"
                                onClick={() => this.goToCart(item)}
                                id="addToBag"
                            >
                                ADD TO BAG
                            </button>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <div>
                <ToolBar books={this.handleChildData}/>
                <br/>
                <br/>
                <div className="books">
                    Books
                    <div className="itemsShow">({this.state.person.length} items)</div>
                </div>
                <div className="margin">
                    <div>{Books}</div>
                </div>
            </div>
        );
    }
}

export default withRouter(FetchBooksData);
