import React from "react";
import "./ProgressBar.css"

const ProgressBar = ({progress, skill}) => {

    return (
        <div className="progress-bar-wrapper">
            <span className="skill-name">{skill}</span>
               
            <div className="progress-bar-container">
                <div className="progress-bar"  style={{width: `${progress}%`}}> 
                <span className="progress-value">{progress}%</span>
            </div>
            </div>
        </div>
    );
};

export default ProgressBar;