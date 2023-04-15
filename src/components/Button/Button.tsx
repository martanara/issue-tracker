import React, { MouseEventHandler } from 'react';

import './styles.scss';

interface IButtonProps {
    className: 'transparent' | 'pink';
    onClick: MouseEventHandler;
    children: string;
    type?: string;
}

const Button = (props: IButtonProps) => (
    <button className={props.className} onClick={props.onClick}>
        {props.children}
    </button>
);

Button.defaultProps = {
    className: 'pink',
    onClick: () => {},
    children: 'Button'
};

export default Button;
