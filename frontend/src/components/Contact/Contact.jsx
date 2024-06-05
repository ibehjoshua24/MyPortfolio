import react from "react"
import "./Contact.css"
import { FaLinkedin } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
    return (
        <>
        <div className="context" id="Contacts">
            <h3>Contact <span>Me</span></h3>
            <div className="conicons">
               <span> <a href="https://www.linkedin.com/in/ibeh-joshua-659a8122b" target="_blank"> <FaLinkedin id="icons" /></a></span>
                <span><a href="tel:+2348073806444"><IoIosPhonePortrait id="icons" /></a> </span>
                <span><a href="https://github.com/ibehjoshua24" target="_blank"><FaGithub id="icons" /></a></span>
                <span> <a href="mailto:ibehjoshua321@gmail.com" target="_blank"><MdOutlineEmail id="icons" /></a>
        </span>
            </div>
        </div>
        </>
    )
}

export default Contact