import React from "react";

export default class FetchBooksData extends React.Component {
  state = {
    loading: true,
    person : []
  };

  async componentDidMount() {
    const url = "http://localhost:8080/books/showBooks";
    const response = await fetch(url);
    const data = await response.json();
    let keys=Object.keys(data)
      this.setState({ person: data, loading: false });
  }

  render() {
    console.log("received data from dashboard", this.props);
    var Books = this.state.person.map((item, i) =>{
      console.log("keys" + JSON.stringify(item));

      return (
          (i+1) % 5 === 0 ? <br /> :
              <div className="div">
                <div className='card' >
                  <div className='imageSpace' >
                    <img className='bookImg' src={item.image} alt={"bookImg"} ></img>
                  </div>
                  <div className='bookName'>{item.title}</div>
                  <div className='authorName'>{item.author}</div>
                  <div className='bookName'>Rs.{item.price}</div>
                  <button className='buttonBuyNow' onClick={this.onSubmit}  >ADD TO BAG</button>
                </div>
              </div>

      )
    })
    return (
        <div >
            <div className='margin'>
              <div>
                {Books}
              </div>
            </div>
        </div>

    )
  }
}