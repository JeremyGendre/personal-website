import React, {PropsWithChildren, ReactNode} from "react";

interface Props extends PropsWithChildren<{}> {
    icon: ReactNode
}

export default function Input(props: Props) {
    return (
        <div className="flex">
            <div className="my-auto">
                { props.icon }
            </div>
            <div>
                { props.children }
            </div>
        </div>
    );
}