import React from "react";
import ShoppingCart from "./ShoppingCart";
import {withRouter} from 'react-router-dom';
import './tooltip.css'

class FetchBooksData extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        loading: true,
        person: []
    };

    goToCart = (event) => {
        this.props.history.push('summery');
    }

    async componentDidMount() {
        const url = "http://localhost:8080/books/showBooks";
        const response = await fetch(url);
        const data = await response.json();
        let keys = Object.keys(data)
        this.setState({person: data, loading: false});
    }

    render() {
        console.log("received data from dashboard", this.props);
        var Books = this.state.person.map((item, i) => {
            console.log("keys" + JSON.stringify(item));

            return (
                (i + 1) % 5 === 0 ? <br/> :
                    <div className="div">
                        <div className='card'>
                            <div className="tooltip">
                                <span className="tooltiptext">{item.description}</span>
                                <div className='imageSpace'>
                                    <img className='bookImg' src={item.image} alt={"bookImg"}></img>
                                </div>
                                <div className='bookName'>{item.title}</div>
                                <div className='authorName'>{item.author}</div>
                                <div className='bookName'>Rs.{item.price}</div>
                                <button className='buttonBuyNow' onClick={this.goToCart}>ADD TO BAG</button>
                            </div>
                        </div>
                    </div>

            )
        })
        return (
            <div><br/><br/>
                <div className='books'>Books
                    <div className='itemsShow'>(52 items)</div>
                </div>
                <div className='margin'>
                    <div>
                        {Books}
                    </div>
                </div>
            </div>

        )
    }

    goToCart(selectedBook) {
        return <ShoppingCart book={selectedBook}/>
    }
}

export default withRouter(FetchBooksData)