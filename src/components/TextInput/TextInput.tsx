import React, { ChangeEventHandler } from "react";

import "./styles.scss";

interface ITextInput {
    placeholder: string;
    labelText: string;
    name: string;
    value: string;
    onChange: ChangeEventHandler;
}

const TextInput = (props: ITextInput) => {
    return (
        <div className="input-container">
            <p>{props.labelText}:</p>
            <input
                className="input"
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
                type="textarea"
            />
        </div>
    );
};

export default TextInput;
