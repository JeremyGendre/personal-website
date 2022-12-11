import Link from 'next/link'
import {PropsWithChildren, ReactNode, useMemo} from "react";
import clsx from "clsx";
import {useRouter} from "next/router";
import { ImProfile } from 'react-icons/im';
import { FaTools, FaQuestionCircle, FaUserCircle } from 'react-icons/fa';
import { BsWalletFill } from 'react-icons/bs';

export default function Header(){

    return (
        <header className="bg-slate-900 h-screen sticky top-0 w-64 p-4 shadow-xl">
            <div className="flex">
                <span className={clsx(
                    'text-2xl relative m-4 ml-auto cursor-pointer p-4',
                    'after:w-8 after:h-8 after:border-2 after:border-transparent after:border-r-main-500 after:border-t-main-500 after:absolute after:right-0 after:top-0 after:transition after:duration-200',
                    'before:w-8 before:h-8 before:border-2 before:border-transparent before:border-l-main-500 before:border-b-main-500 before:absolute before:left-0 before:bottom-0 before:transition before:duration-200',
                    'hover:before:-translate-x-1/4 hover:before:translate-y-1/4',
                    'hover:after:translate-x-1/4 hover:after:-translate-y-1/4',
                )}>
                    MENU
                </span>
            </div>
            <nav className="mt-32">
                <ul className="flex flex-col gap-10 text-xl">
                    <HeaderLink to="/" icon={<FaUserCircle/>}> Profil</HeaderLink>
                    <HeaderLink to="/skills" icon={<FaTools/>}>Compétences</HeaderLink>
                    <HeaderLink to="/projects" icon={<BsWalletFill/>}>Projets</HeaderLink>
                    <HeaderLink to="/about" icon={<FaQuestionCircle/>}>A propos</HeaderLink>
                    <HeaderLink to="/coordinates" icon={<ImProfile/>}>Coordonnées</HeaderLink>
                </ul>
            </nav>
        </header>
    );
}

function HeaderLink({children, to = '/', active = null, icon}: PropsWithChildren<{to?: string, active?: boolean|null, icon?: ReactNode}>){
    const router = useRouter();
    const isActive = useMemo(() => (active !== null ? active : router.pathname === to), [active, router.pathname]);

    return (
        <li>
            <Link href={to} className={clsx(
                "w-full p-2 flex gap-3 items-center cursor-pointer relative transition duration-150 z-10",
                "after:absolute after:top-0 after:rounded-br-full after:left-0 after:w-0 after:transition-[width] after:duration-200 hover:after:w-full after:h-full after:bg-main-600 after:-z-10",{
                'after:w-full': isActive
            })}>{icon} {children}</Link>
        </li>
    )
}
