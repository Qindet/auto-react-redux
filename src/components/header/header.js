import React from "react";
import './header.css'
import {Link, NavLink} from "react-router-dom";
import {connect} from 'react-redux'

import {changeService} from "../../actions/service";
import BmwService from "../../services/bmw-service";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import WagService from "../../services/wag-service";

const Header = ({changeService}) => {
    return (
       <div className="header-main">
           <div className="header-logo">
               <NavLink to="/"><img className="header-main__img" src="/img/logo.png" alt="logo"/></NavLink>
           </div>

           <ul className="header-main__nav">
               <li><button onClick={() => changeService(new BmwService())}>BMW</button></li>
               <li><button onClick={() => changeService(new WagService())}>VolksWagen</button></li>
               <li><Link className="link" to="/">Home</Link></li>
               <li><a className="link" href="#">List</a></li>
               <li><Link className="link" to="/cart">Cart</Link></li>
           </ul>
       </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    console.log(dispatch)
    return {
        changeService: (name) => dispatch(changeService(name))
    }
}

export default connect(null,mapDispatchToProps)(Header)