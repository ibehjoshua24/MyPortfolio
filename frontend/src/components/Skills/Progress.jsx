import React from "react";
import ProgressBar from "./ProgressBar";
import "./Progess.css"

const Progress = () => {
    const skills = [
        {name: "JavaScript", progress: 80},
        {name: "React", progress: 90},
        {name: "CSS", progress: 88},
        {name: "HTML", progress: 86},
        {name: "Node.js", progress: 81},
    ];

    return (
        <div className="pro" id="Skills">
            <h1>My <span>Skills</span></h1>
            
            {skills.map((skill, index) => (
                <ProgressBar 
                key={index}
                skill={skill.name}
                progress={skill.progress} />
            ))}
        </div>
    );
};

export default Progress