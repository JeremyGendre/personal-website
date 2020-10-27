import React, {ReactNode} from "react";

type Props = {
    dark: boolean,
    content : ReactNode
};

export default function ContentSection(props: Props) {
    return (
        <div className={ (props.dark ? 'bg-gray-700 text-white' : '') + ' px-2 md:px-10 lg:px-20 xl:px-40 py-20'}>
            { props.content }
        </div>
    );
}