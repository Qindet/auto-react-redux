import React from "react";
import './app.css'
import Header from "../header";
import {Route} from 'react-router-dom'
import {MainPage} from "../pages/main-page";

const App = () => {

    return (
        <div className="container">
            <Header/>
            <Route path="/" component={MainPage} exact/>
        </div>

    )
}


export default App