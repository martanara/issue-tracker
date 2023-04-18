import React, { ChangeEventHandler } from "react";

import "./styles.scss";

interface ITextArea {
    placeholder: string;
    labelText: string;
    name: string;
    value: string;
    onChange: ChangeEventHandler;
}

const TextArea = (props: ITextArea) => {
    return (
        <div className="textarea-container">
            <div>
                <p>{props.labelText}:</p>
            </div>
            <textarea name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
        </div>
    );
};

export default TextArea;
