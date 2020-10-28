import React from "react";
import {SkillItemType} from "../../types/SkillItem";

export default function SkillItem(props: SkillItemType) {
    return (
        <div className="flex w-20 h-20 relative transition duration-200 overflow-hidden transform hover:scale-110">
            <img className="m-auto" alt={"logo-skill-" + props.label} src={props.path}/>
            <div className="hidden">
                <div>
                    {props.label}
                </div>
            </div>
        </div>
    );
}