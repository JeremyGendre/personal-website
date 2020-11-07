import React from "react";
import {FaFacebook, FaGithub, FaLinkedin} from "react-icons/all";

export default function Footer() {
    return (
        <div className="w-full justify-center flex text-lg py-1 bg-gray-700 text-white">
            <div className="mr-6">©Jérémy Gendre 2020</div>
            <div onClick={() => window.open('https://www.facebook.com/jeremy.gendre.7')}
                 className="my-auto mx-2 cursor-pointer hover:text-orange-500 transition duration-150">
                <FaFacebook/>
            </div>
            <div onClick={() => window.open('https://www.linkedin.com/in/j%C3%A9r%C3%A9my-gendre-a06772133/')}
                 className="my-auto mx-2 cursor-pointer hover:text-orange-500 transition duration-150">
                <FaLinkedin/>
            </div>
            <div onClick={() => window.open('https://github.com/JeremyGendre')}
                 className="my-auto mx-2 cursor-pointer hover:text-orange-500 transition duration-150">
                <FaGithub/>
            </div>
        </div>
    );
}