import React from "react";
import logo from "../../../public/him.png"
import "./About.css"

const About = () => {
   


    return (
        <>
        <div className="aboutpage" id="About">
            <div className="abouttext">
                <h2>About <span>Me</span></h2>
                <p>
                    I am a passionate full stack web developer with a knack for building dynamic and user-friendly web applictions.On the frontend, i thrive on crafting <span> beautiful and reponsive user interfaces</span> using HTML, CSS, and JavaScript frameworks like React.Js. When it comes to the backend, i'm proficient in server-side languages such as Node.js, and i love architecting robust APIs and databases to power the functionality of web apllications. I'm constantly exploring new technologies and staying up-to-date with the latest trends in web development to ensure that my skills are cutting edge.
                </p>
            </div>
                <img  src={logo} alt="" />
        </div>
        </>
    )
}

export default About