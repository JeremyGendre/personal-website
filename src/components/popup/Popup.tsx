import React from "react";
import Button from "../button/Button";

export default function Popup() {
    return(
        <div className="fixed w-screen h-screen bg-gray-800 bg-opacity-50">
            <div className="flex px-4 py-2">
                <div>Titre</div>
                <div>Texte</div>
                <Button text='OK'/>
            </div>
        </div>
    );
}