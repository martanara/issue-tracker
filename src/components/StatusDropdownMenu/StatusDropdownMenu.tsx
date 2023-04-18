import React, { useState } from "react";

import StatusLabel from "components/StatusLabel";

import { IIssue, IStatus } from "interfaces/interfaces";
import { useAppContext } from "context/context";

import "./styles.scss";

interface ISettingsDropdownMenuProps {
    issue: IIssue;
}

const StatusDropdownMenu = (props: ISettingsDropdownMenuProps) => {
    const { editIssue } = useAppContext();

    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClick = (status: IStatus) => {
        const data = { ...props.issue, status: status };
        editIssue({ data } as any);
        setIsOpen(false);
    };

    return (
        <div className="dropdown" onMouseLeave={() => setIsOpen(false)}>
            <div className={props.issue.status !== "closed" ? "dropdown-button" : ""} onClick={() => setIsOpen(!isOpen)}>
                <StatusLabel status={props.issue.status} />
            </div>
            {isOpen && props.issue.status !== "closed" && (
                <div className="dropdown-menu">
                    {props.issue.status === "open" && (
                        <button className="pending" onClick={() => handleButtonClick("pending")}>
                            Pending
                        </button>
                    )}
                    <button className="closed" onClick={() => handleButtonClick("closed")}>
                        Closed
                    </button>
                </div>
            )}
        </div>
    );
};

export default StatusDropdownMenu;
