import React from "react";
import {HobbyType} from "../../types/About";

export default function AboutHobbiesItem(props: HobbyType) {
    return (
        <img className="rounded-full w-20 h-20 mx-2 my-2 border-2 border-orange-500 hover:shadow-hobby transition duration-150" title={props.title}
             src={process.env.PUBLIC_URL + props.src} alt="music"/>
    );
}