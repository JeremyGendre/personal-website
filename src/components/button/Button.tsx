import React, {ButtonHTMLAttributes} from "react";
import '../../assets/css/loader.css';

interface Props extends ButtonHTMLAttributes<{}>{
    text: string,
    loading?: boolean
}

export default function Button(props: Props) {
    return (
        <button onClick={props.onClick} disabled={props.disabled}
                className="relative px-4 py-1 bg-orange-500 cursor-pointer transition duration-150 hover:bg-orange-400 text-white rounded border-1 border-orange-500 hover:border-orange-400 focus:outline-none transform focus:scale-95">
            <div className={props.loading ? 'opacity-0' : ''}>{ props.text }</div>
            <div className={ ( props.loading ? '' : 'opacity-0 ' ) + "absolute top-0 left-0 w-full h-full flex"}>
                <div className="p-2 m-auto loader"/>
            </div>
        </button>
    );
}