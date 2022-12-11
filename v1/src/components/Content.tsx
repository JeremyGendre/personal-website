import React from "react";
import Profile from "./profile/Profile";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import ContentSection from "./ContentSection";
import {FiArrowUpCircle} from "react-icons/all";
import { animateScroll as scroll} from 'react-scroll';

export default function Content() {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <div className="z-10 mt-screen bg-gray-200 flex flex-col">
                <ContentSection name="profile" dark={false} content={<Profile/>}/>
                <ContentSection name="skills" dark={true} content={<Skills/>}/>
                <ContentSection name="projects" dark={false} content={<Projects/>}/>
                <ContentSection name="about" dark={true} content={<About/>}/>
                <ContentSection name="contact" dark={false} content={<Contact/>}/>
                <Footer/>
            </div>
            <div onClick={scrollToTop} className="fixed bottom-0 right-0 mb-6 mr-4 z-10 text-5xl cursor-pointer text-gray-900 hover:text-gray-500 transition duration-150">
                <FiArrowUpCircle/>
            </div>
        </>
    );
}