import React from "react";
import './header.css'

const Header = () => {

    return (
       <div className="header-main">
           <div className="header-logo">
                <img className="header-main__img" src="/img/logo.png"/>
           </div>
           <ul className="header-main__nav">
               <li><a className="link" href="#">Home</a></li>
               <li><a className="link" href="#">List</a></li>
               <li><a className="link" href="#">Cart</a></li>
           </ul>
       </div>
    )
}

export default Header