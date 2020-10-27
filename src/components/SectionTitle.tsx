import React, {ReactNode} from "react";

type Props = {
    icon: ReactNode,
    text: string
};

export default function SectionTitle(props: Props) {
    return (
        <h1 className="flex text-4xl font-brlnsb border-b-2 border-average">
            <div className="my-auto mr-4">
                {props.icon}
            </div>
            <div className="my-auto">{ props.text }</div>
        </h1>
    );
}