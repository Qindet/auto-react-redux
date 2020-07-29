import React from "react";
import './preview.css'


const Preview = (props) => {
    let clazz = 'preview-text '
    let name = 'Show'

    if (props.showInfo) {
        clazz += 'text-style'
        name = 'Close'
    }
    return (
        <div>
            <div className="preview-img-container">
                <div>{props.item.name}</div>
                <img src={props.item.img} alt="img" className="preview-img"/>
                <button className="preview-btn" onClick={props.onAddClass}>{name} information</button>
                <div className={clazz}>
                    {props.item.text}</div>
            </div>
        </div>
    )
}

export default Preview