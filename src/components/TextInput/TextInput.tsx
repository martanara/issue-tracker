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
        <div>
            <div>
                <p>{props.labelText}:</p>
            </div>
            <div>
                <input name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeholder} type="text" />
            </div>
        </div>
    );
};

export default TextInput;
