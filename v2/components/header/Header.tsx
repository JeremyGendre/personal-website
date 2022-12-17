import Link from 'next/link'
import {PropsWithChildren, ReactNode, useEffect, useMemo, useState} from "react";
import clsx from "clsx";
import {useRouter} from "next/router";
import { ImProfile } from 'react-icons/im';
import { FaTools, FaQuestionCircle, FaUserCircle } from 'react-icons/fa';
import { BsWalletFill } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';

export default function Header(){
    const [isOpened, setIsOpened] = useState(true);

    useEffect(() => {
        const defaultOpened = window.innerWidth > 750 ? sessionStorage.getItem('jg-header-opened') : false;
        setIsOpened(defaultOpened !== null ? defaultOpened === 'true' : true)
    }, []);

    const toggleSwitch = () => {
        setIsOpened(prev => {
            sessionStorage.setItem('jg-header-opened', !prev ? 'true' : 'false');
            return !prev
        });
    };

    return (
        <header className={clsx(
            "bg-slate-900 h-screen right-0 top-0 w-64 p-4 shadow-xl transition-all duration-150 overflow-hidden",
            {
                'w-20 sticky': !isOpened,
                'fixed md:sticky': isOpened
            }
        )}>
            <div className="flex">
                {
                    isOpened ? (
                        <span onClick={toggleSwitch} className={clsx(
                            'text-2xl relative m-4 ml-auto cursor-pointer p-4',
                            'after:w-8 after:h-8 after:border-2 after:border-transparent after:border-r-main-500 after:border-t-main-500 after:absolute after:right-0 after:top-0 after:transition after:duration-200',
                            'before:w-8 before:h-8 before:border-2 before:border-transparent before:border-l-main-500 before:border-b-main-500 before:absolute before:left-0 before:bottom-0 before:transition before:duration-200',
                            'hover:before:-translate-x-1/4 hover:before:translate-y-1/4',
                            'hover:after:translate-x-1/4 hover:after:-translate-y-1/4',
                        )}>
                            MENU
                        </span>
                    ) : (
                        <AiOutlineMenu
                            className="cursor-pointer h-8 w-8 m-auto"
                            onClick={toggleSwitch}
                        />
                    )
                }
            </div>
            <nav className="mt-32">
                <ul className="flex flex-col gap-10 text-xl">
                    <HeaderLink to="/" icon={<FaUserCircle/>} reduced={!isOpened}> Profil</HeaderLink>
                    <HeaderLink to="/skills" icon={<FaTools/>} reduced={!isOpened}>Compétences</HeaderLink>
                    <HeaderLink to="/projects" icon={<BsWalletFill/>} reduced={!isOpened}>Projets</HeaderLink>
                    <HeaderLink to="/about" icon={<FaQuestionCircle/>} reduced={!isOpened}>A propos</HeaderLink>
                    <HeaderLink to="/coordinates" icon={<ImProfile/>} reduced={!isOpened}>Coordonnées</HeaderLink>
                </ul>
            </nav>
        </header>
    );
}

type HeaderLinkProps = {
    to?: string,
    active?: boolean|null,
    icon?: ReactNode,
    reduced?: boolean
};

function HeaderLink({children, to = '/', active = null, icon, reduced = false}: PropsWithChildren<HeaderLinkProps>){
    const router = useRouter();
    const isActive = useMemo(() => (active !== null ? active : router.pathname === to), [active, router.pathname]);

    // TODO : faire le responsive
    return (
        <li>
            <Link href={to} className={clsx(
            "w-full p-2 flex gap-3 items-center cursor-pointer relative transition duration-150 z-10",
                "after:absolute after:top-0 after:left-0 after:transition-opacity after:duration-200 after:h-full after:bg-main-600 after:-z-10", {
                "after:transition-[width] after:w-0 hover:after:w-full after:rounded-br-full": !reduced,
                'after:rounded-full justify-center after:opacity-0 hover:after:opacity-100 after:w-full': reduced,
                'after:w-full after:opacity-100': isActive,
            })}>{icon} {reduced ? null : children}</Link>
        </li>
    )
}
