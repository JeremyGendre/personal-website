import React from "react";
import Profile from "./profile/Profile";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

export default function Content() {
    return (
        <div className="relative z-10 mt-screen bg-gray-200 flex flex-col">
            <Profile/>
            <Skills/>
            <Projects/>
            <About/>
            <Contact/>
            <Footer/>
        </div>
    );
}