import React from "react";
import Profile from "./profile/Profile";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import ContentSection from "./ContentSection";
import {FiArrowUpCircle} from "react-icons/all";

export default function Content() {
    return (
        <>
            <div className="z-10 mt-screen bg-gray-200 flex flex-col">
                <ContentSection dark={false} content={<Profile/>}/>
                <ContentSection dark={true} content={<Skills/>}/>
                <ContentSection dark={false} content={<Projects/>}/>
                <ContentSection dark={true} content={<About/>}/>
                <ContentSection dark={false} content={<Contact/>}/>
                <Footer/>
            </div>
            <div className="fixed bottom-0 right-0 mb-6 mr-4 z-10 text-5xl">
                <FiArrowUpCircle/>
            </div>
        </>
    );
}