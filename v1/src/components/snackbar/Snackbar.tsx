import React, {ReactNode, useEffect, useRef} from "react";

type Props = {
    text: string,
    icon?: ReactNode
};

export default function Snackbar(props: Props) {
    const snackbarRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if(props.text && props.text !== '' && snackbarRef !== null){
            snackbarRef.current!.style.transform = `translateX(-${snackbarRef.current!.offsetWidth / 2}px)`;
        }
    }, [props.text]);

    let flexClasses = 'invisible';
    if(props.text && props.text !== ''){
        flexClasses = 'visible text-center';
    }
    if(props.icon){
        flexClasses += ' flex justify-between';
    }

    return (
        <div ref={snackbarRef} className={`fixed bottom-0 mb-4 px-4 py-2 transition duration-150 bg-gray-800 text-white ${flexClasses} left-1/2 rounded`}>
            <div className="my-auto">{ props.text }</div>
            { props.icon ? (
                <div className="ml-8 my-auto text-green-400">{ props.icon }</div>
            ) : null }
        </div>
    );
}