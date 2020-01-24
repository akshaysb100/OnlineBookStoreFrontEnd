import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import './mytoolbar.css'
import IconButton from "@material-ui/core/IconButton";
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import {withRouter} from 'react-router-dom';
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles(theme => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

class MyToolBar extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            valueIcon:0
        }
    }
    async componentDidMount(){
        if (this.state.valueIcon< JSON.parse(localStorage.getItem("abc")).length){
            await this.setState({valueIcon:JSON.parse(localStorage.getItem("abc")).length}
            )
        }
    }
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
                            <StyledBadge badgeContent={this.state.valueIcon} color="secondary">
                                <AddShoppingCartIcon className='iconButton' onClick={this.goToCart}/>
                            </StyledBadge>
                        </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withRouter(MyToolBar)