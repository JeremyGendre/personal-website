import React from "react";

type Props = {
    text: string
};

export default function Snackbar(props: Props) {
    return (
        <div>
            { props.text }
        </div>
    );
}