import React, {ReactNode} from "react";
import { Element } from 'react-scroll';


type Props = {
    dark: boolean,
    content : ReactNode,
    name: string
};

export default function ContentSection(props: Props) {
    return (
        <Element name={props.name}>
            <div className={ (props.dark ? 'bg-gray-700 text-white' : '') + ' px-2 md:px-10 lg:px-20 xl:px-40 py-20'}>
                { props.content }
            </div>
        </Element>
    );
}