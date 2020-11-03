import React, {PropsWithChildren} from "react";
import '../../assets/css/tooltip.css';

interface Props extends PropsWithChildren<{}>{
    title: string,
    width?: string
}

export default function Tooltip(props: Props) {
    return (
        <div className="tooltip-element relative">
            { props.children }
            <div className={`${props.width} tooltip absolute bottom-0 left-0 bg-gray-900 text-white px-4 py-1 rounded text-center break-normal`}>{ props.title }</div>
        </div>
    );
}