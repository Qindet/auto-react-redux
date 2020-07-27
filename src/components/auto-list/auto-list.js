import React from "react";
import './auto-list.css'
import {withRouter} from 'react-router-dom'

import AutoListItem from "../auto-list-item";

const AutoList = ({autoList, history}) => {
    const items = autoList.map((items) => {
        return (
            <AutoListItem key={items.id} items={items} onItemSelected={(itemId) => {
                history.push(`/auto/${itemId}`)
            }}/>
        )
    })

    return (
        <div className="auto-list">
            {items}
        </div>
    )
}




export default withRouter(AutoList)