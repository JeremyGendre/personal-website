import React from "react";
import Profile from "./profile/Profile";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import ContentSection from "./ContentSection";

export default function Content() {
    return (
        <div className="z-10 mt-screen bg-gray-200 flex flex-col">
            <ContentSection dark={false} content={<Profile/>}/>
            <ContentSection dark={true} content={<Skills/>}/>
            <ContentSection dark={false} content={<Projects/>}/>
            <ContentSection dark={true} content={<About/>}/>
            <ContentSection dark={false} content={<Contact/>}/>
            <Footer/>
        </div>
    );
}