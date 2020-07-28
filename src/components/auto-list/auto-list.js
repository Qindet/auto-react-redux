import React from "react";
import './auto-list.css'
import {withRouter} from 'react-router-dom'

import AutoListItem from "../auto-list-item";

const AutoList = ({autoList, history, itemAdded}) => {
    const items = autoList.map((item) => {
        return (
            <AutoListItem key={item.id} item={item} onItemSelected={(itemId) => {
                history.push(`/auto/${itemId}`)
            }}
            itemAdded={() => itemAdded(item)}/>
        )
    })

    return (
        <div className="auto-list">
            {items}
        </div>
    )
}




export default withRouter(AutoList)