import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import "./mytoolbar.css";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { withRouter } from "react-router-dom";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import axios from "axios";
//import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from "@material-ui/core/styles";

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px"
  }
}))(Badge);

class MyToolBar extends React.Component {
  constructor(props) {
    super(props);
    this.url = "http://localhost:8080/books/";
    this.state = { searchDataValue: "", searchValue: "", getBook: [] };
  }

  goToCart = event => {
    this.props.history.push("summery");
  };

  handleSearch = event => {
    if (event.target.value.length >= 1) {
      this.setState({ searchValue: event.target.value });
    }
  };

  async componentDidMount() {
    if (this.state.valueIcon < JSON.parse(localStorage.getItem("abc")).length) {
      await this.setState({
        valueIcon: JSON.parse(localStorage.getItem("abc")).length
      });
    }
  }

  searchBookByTitle(searchData) {
    // return Axios({
    //     method: 'GET',
    //     url: this.url+'searchByAuthorOrTitle?searchElement='+searchData
    // })
    axios
      .get(this.url + "searchByAuthorOrTitle?searchElement=" + searchData)
      .then(result => {
        console.log("===>", result.data);

        // this.props.history.push("/",{searchBooks:result.data})
        this.props.books(result.data);
        return result;
      });
  }

  handleSearchBook = e => {
    let searchDataValue = this.state.searchValue;
    if (e.key == "Enter")
      this.searchBookByTitle(searchDataValue)
        .then(data => {
          // let allBooks=data.data.result;
          // for(let i=0;i<allBooks.length;i++){
          //     if(allBooks[i].title.length>25)
          //     {
          //         allBooks[i].title=allBooks[i].title.slice(0, 25);
          //         allBooks[i].title=allBooks[i].title+"...";
          //     }
          // }
          console.log(data);
          // this.setState({ getBooks: allBooks });
        })
        .catch(err => {
          console.log(err);
        });
  };

  render() {
    return (
      <div className="">
        <AppBar position="static">
          <Toolbar class="toolBar">
            <div class="toolBarDiv">
              <div className="bookIcon">
                <MenuBookIcon />
              </div>
              <div style={{ marginLeft: "-7em" }}>
                <p className="bookstore">Bookstore</p>
              </div>
              <div className="search">
                <div className="searchIcon">
                  <SearchIcon />
                </div>
                <InputBase
                  className="searchInput"
                  placeholder="Search…"
                  onChange={this.handleSearch}
                  onKeyDown={this.handleSearchBook}
                  // startAdornment={(
                  //     <InputAdornment position="start">
                  //         <IconButton>
                  //             <SearchIcon />
                  //         </IconButton>
                  //     </InputAdornment>
                  // )}
                  inputProps={{ "aria-label": "search" }}
                />
                />
              </div>

              <IconButton
                classes="iconButton"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AddShoppingCartIcon
                  className="iconButton"
                  onClick={this.goToCart}
                >
                  {" "}
                </AddShoppingCartIcon>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(MyToolBar);
