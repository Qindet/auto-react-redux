import React from "react";
import './app.css'
import Header from "../header";
import {Route, Switch, Redirect} from 'react-router-dom'
import {MainPage} from "../pages/main-page";
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
                }} />
            </Switch>
        </div>

    )
}


export default App