import React from "react";
import "./NavBar.css"

const NavBar = () => {
    return (
        <>
        <nav className="navbar">
            <h1>IBEH.</h1>
            <ul className="navbar-items">
                <li><a href="#HomePage">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Services">Services</a></li>
                <li><a href="#Skills">My Skills</a></li>
                <li><a href="#Contacts">Contacts</a></li>
            </ul>
        </nav>
        </>
    )
}

export default NavBar