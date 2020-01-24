import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import './mytoolbar.css'
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import {withRouter} from 'react-router-dom';
import MenuBookIcon from "@material-ui/icons/MenuBook";

class MyToolBar extends React.Component {

    goToCart = (event) => {
        this.props.history.push('summery');
    }

    render() {
        return (
            <div className="">
                <AppBar position="static">
                    <Toolbar class="toolBar">
                        <div class="toolBarDiv">
                            <div className="bookIcon"><MenuBookIcon/></div>
                            <div style={{    marginLeft: "-7em"}}><p className="bookstore">Bookstore</p></div>
                            <div className="search">
                                <div className="searchIcon">
                                    <SearchIcon/>
                                </div>
                                <InputBase className='searchInput'
                                           placeholder="Search…"
                                           inputProps={{'aria-label': 'search'}}/>
                            </div>

                        <IconButton classes="iconButton"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit">
                            <AddShoppingCartIcon className='iconButton' onClick={this.goToCart}>  </AddShoppingCartIcon>
                        </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withRouter(MyToolBar)