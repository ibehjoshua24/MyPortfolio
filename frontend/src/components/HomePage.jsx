import React, {useState, useEffect} from "react";
import "./HomePage.css"
import self from "../../public/me-01.png"
const HomePage = () => {
    const texts = ["FullStack Web Developer", "Frontend \developer", "Backend Developer"];
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
                    <button>Download CV</button>
                    <a href="#Contacts"><button>Let's talk</button></a>
                </div>
                <img src={self} alt="" />
            </div>
        </>
    )
}

export default HomePage