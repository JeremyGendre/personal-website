import React from "react";
import { scroller } from 'react-scroll'

type Props = {
    text: string,
    to: string,
    active?: boolean
};

export default function HeaderLink(props: Props) {
    const scrollTo = () => {
        scroller.scrollTo(props.to, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOut'
        })
    };
    return (
        <div onClick={scrollTo} className={ (props.active ? 'bg-gray-200 text-gray-800 ' : '') + "px-6 py-4 flex transition duration-150 hover:bg-gray-200 hover:text-gray-800 cursor-pointer font-bold"}>
            <div className="my-auto">{props.text}</div>
        </div>
    );
}