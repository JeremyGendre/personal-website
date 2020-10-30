import React from "react";
import {SkillItemType} from "../../types/SkillItem";

interface Props extends SkillItemType{
    fullsize?: boolean
}

export default function SkillItem(props: Props) {
    return (
        <div className=" flex mx-2 w-20 h-20 relative transition duration-200 overflow-hidden transform hover:scale-110">
            <img className={"m-auto " + (props.fullsize ? "w-full h-full" : '')} alt={"logo-skill-" + props.label} src={props.path}/>
            <div className="hidden">
                <div>
                    {props.label}
                </div>
            </div>
        </div>
    );
}