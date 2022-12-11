import React from "react";
import {SchoolItemType} from "../../types/About";

interface Props extends SchoolItemType{
    right: boolean
}

export default function AboutSchoolItem(props: Props) {
    return (
        <div className={(props.right ? 'self-end about-school-item-right-container' : 'about-school-item-left-container') + " relative my-2 flex flex-col px-2 sm:px-12 w-full lg:w-1/2"}>
            <div className={(props.right ? 'about-school-item-right' : 'about-school-item-left self-end') + " relative flex bg-gray-200 rounded text-gray-900 px-5 py-4 w-full lg:w-full xl:w-4/5 shadow-about"}>
                <div className="flex flex-col">
                    <div className="text-2xl font-bold">{props.title}</div>
                    <div className="text-lg mt-2">{props.text}</div>
                </div>
            </div>
        </div>
    );
}