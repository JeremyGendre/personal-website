import React from 'react';
import './assets/css/App.css';
import Header from "./components/header/Header";
import Content from "./components/Content";
import useScroll from "./helpers/useScroll";
import {FaChevronDown} from "react-icons/all";

function App() {
    const scrollResult = useScroll();

    return (
        <div className="flex flex-col">
            <Header/>
            <div className="fixed z-0 top-0 w-screen h-screen bg-cover" style={{
                top: '-' + scrollResult.bgPositionY + 'px'
            }}>
                <div className="app-background w-full h-full bg-cover transform scale-105" style={{
                    backgroundImage : "url('" + process.env.PUBLIC_URL + "/images/fond_info.jpg')",
                }}/>
            </div>
            <div className="fixed z-10 flex flex-col w-full h-full" style={{
                top: '-' + scrollResult.welcomeText.positionY + 'px',
                opacity: scrollResult.welcomeText.opacity
            }}>
                <img alt="welcome-img" className="m-auto w-1/2" src={process.env.PUBLIC_URL + '/images/welcome2.png'}/>
                <FaChevronDown className="text-white text-5xl mx-auto mb-8 animate-pulse animate-bounce"/>
            </div>

            <Content/>
        </div>
    );
}

export default App;
