import React, {PropsWithChildren, useEffect, useRef} from "react";
import '../../assets/css/tooltip.css';

interface Props extends PropsWithChildren<{}>{
    title: string,
    width?: string
}

export default function Tooltip(props: Props) {
    const tooltip = useRef(null);
    useEffect(() => {
        // @ts-ignore
        tooltip.current.style.left = 'calc(50% - '+ (tooltip.current.offsetWidth/2) +'px )';
    },[tooltip]);
    return (
        <div className="tooltip-element relative">
            { props.children }
            <div ref={tooltip} className={`${props.width} tooltip opacity-0 z-10 transition duration-150 absolute bottom-0 mx-auto bg-gray-900 text-white px-4 py-1 rounded text-center break-normal`}>{ props.title }</div>
        </div>
    );
}