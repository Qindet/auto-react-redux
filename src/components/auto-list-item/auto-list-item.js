import React from "react";
import './auto-list-item.css'

const AutoListItem = (props) => {
    let clazz = 'auto-list-item__img'
    const {img, name, price} = props.items


    return (
        <div className="auto-list-item">
            <img src={img} className="auto-list-item__img" />
            <div className="auto-list-item__text">
                <span className="auto-name auto-text">Model: {name}</span><br/>
                <span className="auto-price auto-text">Price: {price}</span><br/>
                <span className="auto-year auto-text"></span>
            </div>
        </div>
    )
}

export default AutoListItem