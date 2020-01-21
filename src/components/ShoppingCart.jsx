import React from 'react'

export default class ShoppingCart extends React.Component {
    state = {
        book:{}
    };


    constructor(props) {
        super(props);
        this.state = this.props.book;
    }

    render() {
        console.log("received data from dashboard", this.props);
        var Book =
                    <div className="div">
                        <div className='card'>
                            <div className='imageSpace'>
                                <img className='bookImg' src={this.props.book.image} alt={"bookImg"}></img>
                            </div>
                            <div className='bookName'>{this.props.book.title}</div>
                            <div className='authorName'>{this.props.book.author}</div>
                            <div className='bookName'>Rs.{this.props.book.price}</div>
                        </div>
                    </div>

        return (
            <div>
                <div className='margin'>
                    <div>
                        {Book}
                    </div>
                </div>
            </div>
        )
    }
}