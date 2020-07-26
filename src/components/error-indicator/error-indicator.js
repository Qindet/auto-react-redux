
import React from "react";
import './error-indicator.css'
import icon from './error.jpg'


const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon"/>
            <span className="boom">Whoops</span>
            <span>
        something has gone terribly wrong
      </span>
            <span>
        We are fixing the issue tho
      </span>
        </div>
    )
}

export default ErrorIndicator