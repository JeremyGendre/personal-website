import React from 'react';
import './assets/css/App.css';
import Header from "./components/header/Header";
import Content from "./components/Content";
import useScroll from "./helpers/useScroll";

function App() {
    const scrollResult = useScroll();

    return (
        <div className="flex flex-col">
            <Header/>
            <div className="fixed z-0 top-0 w-screen h-screen bg-cover"
                 style={{
                     backgroundImage : "url('" + process.env.PUBLIC_URL + "/images/fond_info.jpg')",
                     top: '-' + scrollResult.bgPositionY + 'px'
                 }}/>
            <div className="fixed z-10 flex w-full h-full" style={{
                top: '-' + scrollResult.welcomeText.positionY + 'px',
                opacity: scrollResult.welcomeText.opacity
            }}>
                <img alt="welcome-img" className="m-auto w-1/2" src={process.env.PUBLIC_URL + '/images/welcome2.png'}/>
            </div>

            <Content/>

            <div id="div-scroll-top">
                <i className="fas fa-arrow-up"></i>
            </div>
            <div id='popup-container'>
                <div id='popup'>
                    <div>La fonctionnalité n'est pas encore opérationnelle :(</div>
                    <div className='btn-valid-popup-container'><span className="btn-valid-popup">OK</span></div>
                </div>
            </div>
        </div>
    );
}

export default App;
