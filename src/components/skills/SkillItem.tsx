import React from "react";

type Props = {
    label: string,
    path: string
};

export default function SkillItem(props: Props) {
    return (
        <div className="flex w-20 h-20 relative transition overflow-hidden">
            <img className="m-auto" alt={"logo-skill-" + props.label} src={props.path}/>
            <div className="hidden">
                <div>
                    {props.label}
                </div>
            </div>
        </div>
    );
}