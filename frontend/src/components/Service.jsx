import React from "react";
import ServiceCard from "../components/ServiceCard";
import "./Service.css"

const Service = () => {
    const services = [
        {
            title: "Web Development" ,
            first: "front-end development" ,
            second: "back-end development" ,
            third: "responsive design" ,
        },
        {
            title: "Database Management" ,
            first: "database design" ,
            second: "CRUD operations" ,
            third: "performance optimization" ,
        },
        {
            title: "API Development and Integration" ,
            first: "RESTful APIs" ,
            second: "third-party API integration" ,
            third: "server management" ,
        },
        { 
            title: "Version Control" ,
            first: "source code management" ,
            second: "branching and merging" ,
            third: "code review" ,
        },
    ];
    

    return (
        <>
        <div className="first" id="Services">
        <h2>My <span>Services</span></h2>
        <div className="cand">
        {
        services.map(({title,first,second,third}, id) => (
            <ServiceCard
            key= {id}
            title= {title}
            first= {first}
            second= {second}
            third= {third}
            />
        ))}
        </div>

        </div>
        </>
    )
}

export default Service;