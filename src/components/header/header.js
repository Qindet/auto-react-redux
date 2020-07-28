import React from "react";
import './header.css'
import {Link} from "react-router-dom";

const Header = () => {

    return (
       <div className="header-main">
           <div className="header-logo">
                <img className="header-main__img" src="/img/logo.png" alt="logo"/>
           </div>
           <ul className="header-main__nav">
               <li><Link className="link" to="/">Home</Link></li>
               <li><a className="link" href="#">List</a></li>
               <li><Link className="link" to="/cart">Cart</Link></li>
           </ul>
       </div>
    )
}

export default Header