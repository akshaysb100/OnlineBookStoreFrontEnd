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
              <div className='cardSize' >
                <div className='card' >
                  <div >
                    <img className="title" src={item.image} alt={"bookImg"}  height="100px" width="100px"></img>
                  </div>
                  <div >
                  <div className='smallText'>  {item.title}</div>
                    <div className=''>  {item.author}</div>
                    <div>Rs.{item.price}</div>
                  </div>
                  <div >
                  <button className='demo'>BUY NOW</button>
                </div>
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