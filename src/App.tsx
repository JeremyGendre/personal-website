import React, {useEffect, useState} from 'react';
import './assets/css/App.css';
import Header from "./components/header/Header";
import Content from "./components/Content";

function useScroll(number: number){
    const [result, setResult] = useState(0);

        useEffect(() => {
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        },[]);

    const handleScroll = (e: Event) => {
        console.log(window.scrollY);
        console.log(window.scrollY / number);
    };
}

function App() {
    const scrollBackground = useScroll(2);

    return (
        <div className="flex flex-col">
            <Header/>
            <img className="fixed z-0 top-0 w-screen h-screen" src={process.env.PUBLIC_URL + '/images/fond_info.jpg'}/>
            <img className="fixed z-10" src={process.env.PUBLIC_URL + '/images/welcome2.png'}/>

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
