import React, {PropsWithChildren} from "react";
import '../../assets/css/tooltip.css';

interface Props extends PropsWithChildren<{}>{
    title: string
}

export default function Tooltip(props: Props) {
    return (
        <div className="tooltip-element relative">
            { props.children }
            <div className="tooltip absolute bottom-0 left-0 bg-gray-900 text-white px-4 py-1 rounded">{ props.title }</div>
        </div>
    );
}