import React from "react";
import "./ServiceCard.css"


const ServiceCard = ({title, first, second, third}) => {
    return (
        <>
        <div className= "card">
            <h3>{title}</h3>
            <ul>
                <li>{first}</li>
                <li>{second}</li>
                <li>{third}</li>
            </ul>
        </div>
        </>
    )
}

export default ServiceCard