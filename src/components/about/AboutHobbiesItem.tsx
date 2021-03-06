import React from "react";
import {HobbyType} from "../../types/About";
import Tooltip from "../tooltip/Tooltip";

export default function AboutHobbiesItem(props: HobbyType) {
    return (
        <Tooltip title={props.title} width={props.tooltipWidth ? props.tooltipWidth : ''}>
            <img className="rounded-full w-20 h-20 mx-2 my-2 border-2 border-orange-500 hover:shadow-hobby transition duration-150" title={props.title}
                 src={process.env.PUBLIC_URL + props.src} alt="music"/>
        </Tooltip>
    );
}