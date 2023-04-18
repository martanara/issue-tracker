import React, { MouseEventHandler } from "react";

import "./styles.scss";

interface IButtonProps {
    text: string;
    className: "dark-blue" | "hot-pink" | "white-outline";
    onClick: MouseEventHandler;
    type?: string;
    outline?: boolean;
}

const Button = (props: IButtonProps) => (
    <button className={props.outline ? `${props.className} outline` : props.className} onClick={props.onClick}>
        {props.text}
    </button>
);

Button.defaultProps = {
    text: "Button",
    className: "hot-pink",
    onClick: () => {},
    outline: false,
};

export default Button;
