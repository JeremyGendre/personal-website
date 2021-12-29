import React, { useState } from "react";
import Button from "../button/Button";

interface Props {
    title: string,
    text: string,
    btnText: string,
    show?: boolean,
    onClose?: Function
}

export default function Popup(props: Props) {
    const [opened, setOpened] = useState<Boolean>(props.show ? props.show : true);

    const handleClose = () => {
        if(props.onClose){
            props.onClose();
        }else{
            setOpened(false);
        }
    };

    return(
        <div className={ (opened ? 'flex' : 'hidden') + " fixed w-screen h-screen bg-gray-800 bg-opacity-50 top-0 left-0"}>
            <div className="flex flex-col text-center px-6 py-4 m-auto bg-gray-200 rounded shadow-lg">
                <div className="mb-4 text-3xl">{ props.title}</div>
                <div className="mb-6 text-xl">{ props.text }</div>
                <div>
                    <Button onClick={handleClose} text={ props.btnText }/>
                </div>
            </div>
        </div>
    );
}
