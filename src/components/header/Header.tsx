import React, {useEffect, useState} from "react";
import HeaderLink from "./HeaderLink";
import {CgClose, FiMenu} from 'react-icons/all';

export default function Header() {
    const [headerCollapsed, setHeaderCollapsed] = useState(true);

    const toggleHeaderCollapse = () => {
        setHeaderCollapsed(prevState => !prevState);
    };

    const Links = (
        <>
            <HeaderLink text={'PROFIL'} url={'profile'}/>
            <HeaderLink text={'COMPETENCES'} url={'skills'}/>
            <HeaderLink text={'PROJETS'} url={'projects'}/>
            <HeaderLink text={'A PROPOS'} url={'about'}/>
            <HeaderLink text={'CONTACT'} url={'contact'}/>
        </>
    );

    return (
        <header className="sticky top-0 z-50 flex justify-around bg-gray-800 shadow-md">
            <div className="flex">
                <h1 className="my-auto ml-2 text-4xl text-left font-forte text-gray-200">
                    Jérémy Gendre
                </h1>
            </div>
            <div className="my-auto text-white flex md:hidden">
                { headerCollapsed ? '' : (
                    <FiMenu onClick={toggleHeaderCollapse} className="cursor-pointer" size={30}/>
                ) }
            </div>
            { headerCollapsed ? (
                <div className="flex flex-col md:hidden fixed right-0 bg-gray-800 text-white">
                    <div className="text-white ml-auto mr-2 mt-2">
                        <CgClose onClick={toggleHeaderCollapse} size={30}/>
                    </div>
                    { Links }
                </div>
            ) : '' }
            <div className="hidden md:flex text-white">
                { Links }
            </div>
        </header>
    );
}