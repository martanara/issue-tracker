import React, { useState } from "react";

import { TbDotsVertical } from "react-icons/tb";

import "./styles.scss";
import { useAppContext } from "context";

interface ISettingsDropdownMenuProps {
    issueId: string;
}

const SettingsDropdownMenu = (props: ISettingsDropdownMenuProps) => {
    const { deleteIssue } = useAppContext();

    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClick = (action: string) => {
        setIsOpen(false);
        switch (action) {
            case "edit":
                // handle edit button click action
                break;
            case "delete":
                deleteIssue(props.issueId);
                break;
            case "changeStatus":
                // handle change status button click action
                break;
            default:
                break;
        }
    };

    return (
        <div className="dropdown" onMouseLeave={() => setIsOpen(false)}>
            <div className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
                <TbDotsVertical />
            </div>
            {isOpen && (
                <div className="dropdown-menu">
                    <button onClick={() => handleButtonClick("edit")}>Edit</button>
                    <button onClick={() => handleButtonClick("delete")}>Delete</button>
                    <button onClick={() => handleButtonClick("changeStatus")}>Change Status</button>
                </div>
            )}
        </div>
    );
};

export default SettingsDropdownMenu;
