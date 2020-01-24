import React, { Component } from "react";
import "./shippingcart.css";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      loading: true,
      person: [],
      totalAmount: 0
    };
  }

  async componentDidMount() {
    let data = JSON.parse(localStorage.getItem("abc"));
    await this.setState({ loading: false });
    await this.setState({ person: data });
  }

  render() {
    var Books = this.state.person.map((item, i) => {
      console.log("keys" + JSON.stringify(item));
      return (
        <div className="shippingdiv">
          <div className="shippingcard">
            <div className="shippingimageSpace">
              <img className="shippingbookImg" src={item.image}></img>
              <div>
                <div className="shippingbookName">{item.title}</div>
                <div className="shippingauthorName">{item.author}</div>
                <div className="shippingbookName">Rs.{item.price}</div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <br />
        <br />
        <div className="shippingbooks"></div>
        <div className="shippingmargin">
          <div className="marginbooks">{Books}</div>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
