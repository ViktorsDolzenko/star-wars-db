import React from 'react';
import "./error-indicator.css"
import icon from "./error.png"

export const ErrorIndicator = () => {
    return(
        <div className="error-container">
            <div className="error-img">
            <img className="error-img"  src={icon} alt="error icon"/>
            </div>
            <ul className="error-message">
                <li className="error-list-item">
                    <span className="error-message--ups">Error</span>
                </li>
                <li className="error-list-item">
                    <span>something went wrong</span>
                </li>
                <li className="error-list-item">
                    <span>try again later...</span>
                </li>
            </ul>
        </div>
    );
};
