import React from "react";
import HeaderLink from "./HeaderLink";
import {FiMenu} from 'react-icons/all';

export default function Header() {
    return (
        <header className="sticky top-0 flex justify-around bg-gray-800 shadow-md">
            <div className="flex">
                <h1 className="my-auto ml-2 text-4xl text-left font-forte text-gray-200">
                    Jérémy Gendre
                </h1>
            </div>
            <div className="my-auto text-white flex md:hidden">
                <FiMenu className="cursor-pointer" size={30}/>
            </div>
            <div className="hidden md:flex text-white">
                <HeaderLink text={'PROFIL'} url={'profile'}/>
                <HeaderLink text={'COMPETENCES'} url={'skills'}/>
                <HeaderLink text={'PROJETS'} url={'projects'}/>
                <HeaderLink text={'A PROPOS'} url={'about'}/>
                <HeaderLink text={'CONTACT'} url={'contact'}/>
            </div>
        </header>
    );
}