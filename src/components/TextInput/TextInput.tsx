import React, { ChangeEventHandler } from "react";

import "./styles.scss";

interface ITextInput {
    placeholder: string;
    name: string;
    value: string;
    onChange: ChangeEventHandler;
}

const TextInput = (props: ITextInput) => {
    return <input className="input" name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeholder} type="text" />;
};

export default TextInput;
