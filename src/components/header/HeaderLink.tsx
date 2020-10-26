import React from "react";

type Props = {
    text: string,
    url: string,
    active?: boolean
};

export default function HeaderLink(props: Props) {
    return (
        <div className={ (props.active ? 'bg-gray-200 text-gray-800 ' : '') + "px-6 py-4 flex transition duration-150 hover:bg-gray-200 hover:text-gray-800 cursor-pointer font-bold"} data-href={props.url}>
            <div className="my-auto">{props.text}</div>
        </div>
    );
}