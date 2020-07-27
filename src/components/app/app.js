import React from "react";
import './app.css'
import Header from "../header";
import {Route, Switch, Redirect} from 'react-router-dom'
import {MainPage} from "../pages/main-page";
import AutoItemDetails from "../auto-item-details/auto-item-details";

const App = () => {

    return (
        <div className="container">
            <Header/>
            <Switch>
                <Route path="/" component={MainPage} exact/>
                <Route path="/auto/:id" render={({match}) => {
                    const {id} = match.params
                    return <AutoItemDetails itemId={id}/>
                }} />
            </Switch>


        </div>

    )
}


export default App