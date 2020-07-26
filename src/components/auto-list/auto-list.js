import React from "react";
import './auto-list.css'

import AutoListItem from "../auto-list-item";

const AutoList = ({autoList}) => {

    const items = autoList.map((items) => {
        return (
            <AutoListItem key={items.id} items={items}/>
        )
    })

    return (
        <div className="auto-list">
            {items}
        </div>
    )
}




export default AutoList