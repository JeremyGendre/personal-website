import React from "react";
import {SkillItemType} from "../../types/SkillItemType";

interface Props extends SkillItemType{
    fullsize?: boolean
}

export default function SkillItem(props: Props) {
    return (
        <div className={"flex flex-col skill-item my-2 mx-4 relative cursor-pointer"}>
            <div className={(props.rounded ? 'rounded-full ' : '') + " relative flex m-auto overflow-hidden transition duration-200 w-24 h-24 transform hover:scale-110"}>
                <img className={"m-auto " + (props.fullsize ? "w-full h-full" : '')} alt={"logo-skill-" + props.label} src={props.path}/>
            </div>
            <div className="text-center text-lg font-bold mt-4">
                <div>
                    {props.label}
                </div>
            </div>
        </div>
    );
}