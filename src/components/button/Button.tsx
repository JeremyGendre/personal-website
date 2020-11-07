import React, {ButtonHTMLAttributes} from "react";
import '../../assets/css/loader.css';

interface Props extends ButtonHTMLAttributes<{}>{
    text: string,
    loading?: boolean
}

export default function Button({loading, text, ...otherProps}: Props) {
    return (
        <button {...otherProps} className="relative px-4 py-1 bg-orange-500 cursor-pointer transition duration-150 hover:bg-orange-400 text-white rounded border-1 border-orange-500 hover:border-orange-400 focus:outline-none transform focus:scale-95">
            <div className={loading ? 'opacity-0' : ''}>{ text }</div>
            <div className={ ( loading ? '' : 'opacity-0 ' ) + "absolute top-0 left-0 w-full h-full flex"}>
                <div className="p-2 m-auto loader"/>
            </div>
        </button>
    );
}