import React, {Component} from 'react';
import './tooltip.css'

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            loading: true,
            person: [],
            listShoppingCart: []
        };
    }

    render() {
        return (
            <div className="div">
                <div className='card'>
                    <div className="tooltip">
                        <div className='imageSpace'>
                            <img className='bookImg' src={JSON.parse(localStorage.getItem("abc"))[0].image}
                                 alt={"bookImg"}></img>
                        </div>
                        <div className='bookName'>{}</div>
                        <div className='authorName'>{}</div>
                        <div className='bookName'>Rs.{}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;
