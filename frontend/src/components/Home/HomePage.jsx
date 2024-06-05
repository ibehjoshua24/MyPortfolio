import React, {useState, useEffect} from "react";
import "./HomePage.css"
import self from "../../../public/ibeh.png"
const HomePage = () => {
    const texts = ["FullStack Developer", "Frontend Developer", "Backend Developer"];
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0)
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        if (index < texts[wordIndex].length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + texts[wordIndex].charAt(index));
                setIndex(prev => prev + 1);
            }, 400);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setDisplayedText('');
                setIndex(0);
                setWordIndex((prev) => (prev + 1) % texts.length)
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [index, texts, wordIndex])
    return (
        <>
            <div className="homepage" id="HomePage">
                <div className="text">
                    <h4>Hello, My Name Is </h4>
                    <span> Ibeh Joshua</span>
                    <h3>{displayedText}</h3>
                    <a href="https://drive.google.com/file/d/11k4gGF53CCUFvptp1X10T3ZfA4Ml0v4v/view?usp=sharing" target="_blank"><button>Download CV</button></a>
                    <a href="#Contacts"><button>Let's talk</button></a>
                </div>
                <img src={self} alt="" />
            </div>
        </>
    )
}

export default HomePage