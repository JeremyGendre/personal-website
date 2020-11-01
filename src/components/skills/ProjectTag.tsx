import React from "react";
import {ProjectTagType} from "../../types/ProjectTagType";

export default function ProjectTag(props: ProjectTagType) {
    return (
        <div className="flex justify-center text-center">
            <div className={props.color + " my-auto rounded-full w-1 h-1"}/>
            <div className="my-auto">{props.text}</div>
        </div>
    );
}