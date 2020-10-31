import React from "react";

type Props = {
    path: string,
    href: string,
    title: string
    text: string
};

export default function ProjectItem(props: Props) {
    return (
        <div className="project-item flex relative overflow-hidden max-h-2xl max-w-2xl mx-auto my-4 cursor-pointer shadow-project">
            <img alt="project-img" className="transition duration-200" src={props.path}/>
            <div className="project-item-bg absolute top-0 left-0 w-full h-full bg-gray-800 transition duration-200 opacity-50"/>
            <div className="bottom-0 left-0 absolute text-white font-bold bg-gray-800 bg-opacity-75 w-full">
                <div className="project-item-text-container relative">
                    <div className="px-8 py-4 w-full">
                        <div className="text-xl">{props.title}</div>
                        <div>{props.text}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}