import React, {Component} from 'react';
import './shippingcart.css'

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            loading: true,
            person: [],
        };
    }

     componentDidMount() {
         let data = JSON.parse(localStorage.getItem("abc"));
         this.setState({person: data});
         console.log(this.state.person)
     }


        render() {
        return (
            <div className="shippingdiv">
                <div className='shippingcard'>
                    <div className='shippingimageSpace'>
                        <img className='shippingbookImg' src={this.state.person.image}></img>
                        <div>
                            <div className='shippingbookName'>{JSON.parse(localStorage.getItem("abc"))[0].title}</div>
                            <div
                                className='shippingauthorName'>{JSON.parse(localStorage.getItem("abc"))[0].author}</div>
                            <div
                                className='shippingbookName'>Rs.{JSON.parse(localStorage.getItem("abc"))[0].price}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;
