import React from "react";
import {withRouter} from 'react-router-dom';
import './tooltip.css'
import './fetchBookdata.css'

class FetchBooksData extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        clicks: 0,
        loading: true,
        person: [],
        listShoppingCart:[]
    };

    goToCart = (event) => {
        this.state.listShoppingCart.push(event)
        localStorage.setItem("abc", JSON.stringify(this.state.listShoppingCart))
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
                                <span className="tooltiptext"><h5
                                    style={{color: "black"}}>Book Detail</h5>{item.description}</span>
                                <div className='imageSpace'>
                                    <img className='bookImg' src={item.image} alt={"bookImg"}></img>
                                </div>
                                <div className='bookName'>{item.title}</div>
                                <div className='authorName'>{item.author}</div>
                                <div className='bookName'>Rs.{item.price}</div>
                                <button className='buttonBuyNow' onClick={() => this.goToCart(item)}>ADD TO BAG</button>
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
}

export default withRouter(FetchBooksData)