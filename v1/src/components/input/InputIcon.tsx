import React, {HTMLProps, PropsWithChildren, ReactNode, useRef} from "react";

interface Props extends PropsWithChildren<{}>, HTMLProps<{}> {
    icon: ReactNode
}

export default function InputIcon(props: Props) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLDivElement | null>(null);

    const handleContainerClick = () => {
        const inputContainerChildren = inputRef.current!.children;
        for(let i = 0, imax = inputContainerChildren.length; i < imax; i++){
            if(inputContainerChildren[i].tagName === 'INPUT'){
                // @ts-ignore
                inputContainerChildren[i].focus();
                return;
            }
        }
    };

    return (
        <div ref={containerRef} onClick={handleContainerClick} className={props.className + " flex"}>
            <div className="my-auto ml-1 mr-3 opacity-75 flex-initial">
                { props.icon }
            </div>
            <div ref={inputRef} className="my-auto flex-1">
                { props.children }
            </div>
        </div>
    );
}