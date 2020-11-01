import React from "react";
import {ProjectTagType} from "../../types/ProjectTagType";

export default function ProjectTag(props: ProjectTagType) {
    return (
        <div className="flex justify-center text-center mr-2 border-white border-1 rounded-full px-2 hover:bg-gray-100 hover:bg-opacity-20 transition duration-150 mt-1">
            <div className={props.color + " my-auto rounded-full w-3 h-3 mr-1"}/>
            <div className="my-auto">{props.text}</div>
        </div>
    );
}