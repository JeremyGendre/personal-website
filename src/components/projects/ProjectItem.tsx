import React from "react";
import {ProjectItemType} from "../../types/ProjectItemType";
import ProjectTag from "../skills/ProjectTag";


export default function ProjectItem(props: ProjectItemType) {
    const handleClick = () => {
        window.open(props.href, '_blank');
    };
    return (
        <div onClick={handleClick} className="project-item flex relative overflow-hidden max-h-2xl max-w-2xl mx-auto my-4 cursor-pointer shadow-project">
            <img alt="project-img" className="transition duration-200" src={props.path}/>
            <div className="project-item-bg absolute top-0 left-0 w-full h-full bg-gray-800 transition duration-200 opacity-40"/>
            <div onClick={(e) => {e.preventDefault(); e.stopPropagation(); }} className="bottom-0 text-sm left-0 absolute text-white font-bold bg-gray-800 bg-opacity-80 w-full cursor-default">
                <div className="project-item-text-container relative">
                    <div className="px-8 py-2 w-full">
                        <div className="text-xl">{props.title}</div>
                        <div className="flex mt-1">
                            {props.tags.map(tag => <ProjectTag color={tag.color} text={tag.text}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}