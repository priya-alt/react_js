import React from 'react';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            headerItem: []
        }
    }
    componentDidUpdate = () => {
        console.log( this.props.cart);
    }
    render()
    {  
     let cart  = this.props;
     console.log("cart value ", this.props.cart);
     return (
        <header className="header" align="left-top-cornor">
        <Link to={{ pathname: '/cart', state: { cart: this.props.cart, items:this.props.items} }}>
            <Badge  className="badge" badgeContent={ this.props.cart && this.props.cart.length !== 0? this.props.cart.length : 0} color="primary" >
            <img src="cart.svg"  align="right" height="80" width="60"/>
            </Badge>
            </Link>
         <h1>Bewkoof</h1>
          </header>
    )
     };
    }
     export default Header;