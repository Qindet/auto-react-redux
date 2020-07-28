import React from "react";
import './app.css'
import Header from "../header";
import {Route, Switch, Redirect} from 'react-router-dom'
import {MainPage} from "../pages/main-page";
import {CartPage} from "../pages/cart-page";
import AutoItemDetailsContainer from "../../containers/auto-item-details-container";

const App = () => {

    return (
        <div className="container">
            <Header/>
            <Switch>
                <Route path="/" component={MainPage} exact/>
                <Route path="/auto/:id" render={({match}) => {
                    const {id} = match.params
                    return <AutoItemDetailsContainer itemId={id}/>
                }} /> //возможно сделать на второй странице просто лист и выбор машин
                <Route path="/cart" component={CartPage}/>
                <Redirect to="/"/>
            </Switch>
        </div>

    )
}


export default App