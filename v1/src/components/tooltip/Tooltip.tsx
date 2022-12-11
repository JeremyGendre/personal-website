import React, {PropsWithChildren, useRef} from "react";
import '../../assets/css/tooltip.css';

interface Props extends PropsWithChildren<{}>{
    title: string,
    width?: string
}

export default function Tooltip(props: Props) {
    const tooltip = useRef(null);
    return (
        <div className="tooltip-element relative block">
            { props.children }
            <div ref={tooltip} className={`${props.width} tooltip relative hidden justify-center z-10 transition duration-150`}>
                <div className="tooltip-subelement absolute bottom-0 mx-auto bg-gray-900 text-white px-4 py-1 rounded text-center">
                    { props.title }
                </div>
            </div>
        </div>
    );
}
