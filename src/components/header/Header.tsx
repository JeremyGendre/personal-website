import React, {useState} from "react";
import HeaderLink from "./HeaderLink";
import {CgClose, FiMenu} from 'react-icons/all';

export default function Header() {
    const [headerCollapsed, setHeaderCollapsed] = useState(false);

    const toggleHeaderCollapse = () => {
        setHeaderCollapsed(prevState => !prevState);
    };

    const Links = (
        <>
            <HeaderLink text={'PROFIL'} to={'profile'}/>
            <HeaderLink text={'COMPETENCES'} to={'skills'}/>
            <HeaderLink text={'PROJETS'} to={'projects'}/>
            <HeaderLink text={'A PROPOS'} to={'about'}/>
            <HeaderLink text={'CONTACT'} to={'contact'}/>
        </>
    );

    return (
        <>
            <header className="sticky top-0 z-50 flex justify-around bg-gray-800 shadow-header">
                <div className="flex">
                    <h1 className="my-auto ml-2 text-4xl text-left font-forte text-gray-200">
                        Jérémy Gendre
                    </h1>
                </div>
                <div className="my-auto text-white flex md:hidden">
                    <FiMenu onClick={toggleHeaderCollapse} className="cursor-pointer" size={30}/>
                </div>
                <nav className="hidden md:flex text-white">
                    { Links }
                </nav>
            </header>
            { headerCollapsed ? (
                <div onClick={() => setHeaderCollapsed(false)} className="flex flex-col md:hidden fixed top-0 right-0 z-50 w-48 right-0 bg-gray-800 text-white">
                    <div className="text-white ml-auto mr-2 mt-2">
                        <CgClose onClick={toggleHeaderCollapse} size={30}/>
                    </div>
                    { Links }
                </div>
            ) : '' }
        </>
    );
}
