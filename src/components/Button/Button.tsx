import React, { MouseEventHandler } from "react";

import "./styles.scss";

interface IButtonProps {
    text: string;
    className: "dark-blue" | "pink";
    onClick: MouseEventHandler;
    type?: string;
}

const Button = (props: IButtonProps) => (
    <button className={props.className} onClick={props.onClick}>
        {props.text}
    </button>
);

Button.defaultProps = {
    text: "Button",
    className: "pink",
    onClick: () => {},
};

export default Button;
