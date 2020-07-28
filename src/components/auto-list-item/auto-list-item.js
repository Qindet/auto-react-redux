import React from "react";
import './auto-list-item.css'


const AutoListItem = (props) => {
    const {img, name, price, id} = props.item


    return (
        <div className="auto-list-item">
            <img src={img} className="auto-list-item__img" alt="list-img"/>

            <div className="auto-list-item__text">
                <span className="auto-name auto-text">Model: {name}</span><br/>
                <span className="auto-price auto-text">Price: {price}</span><br/>
                <span className="auto-year auto-text"></span>
                <button className="item-link auto-text" onClick={() => {
                    props.onItemSelected(id)
                }}>More info</button>
                <button className="item-link-2 auto-text" onClick={() => props.itemAdded(props.item)}>
                    Add item
                </button>
            </div>
        </div>
    )
}

export default AutoListItem