import React from "react";
import './auto-item-details.css'

const AutoItemDetails = (props) => {
    const {img,name,details,price} = props.autoItem
    return (
        <div className="auto-details">
            <div className="auto-details-main">
                <div className="auto-details__img">
                    <img src={img} alt="details"/>
                </div>
                <div className="auto-details__main">
                    <div className="details-text"><strong>Model: </strong>{name}</div><br/>
                    <div className="details-text"><strong>Information: </strong>{details}</div><br/>
                    <div className="details-text"><strong>Price: </strong>{price}</div>
                </div>
            </div>

            <button className="btn-details">Add to cart</button>
        </div>
    )
}

export default AutoItemDetails