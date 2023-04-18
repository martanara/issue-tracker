import React, { useState } from "react";

import { BiSortDown } from "react-icons/bi";
import { useAppContext } from "context/context";
import { IIssue } from "interfaces/interfaces";

import "./styles.scss";

interface ISortingHeaderProps {
    name: string;
}

const SortingHeader = (props: ISortingHeaderProps) => {
    const { issuesList, setIssuesList } = useAppContext();

    const [sortColumn, setSortColumn] = useState<string>("");
    const [isAscending, setIsAscending] = useState<boolean>(false);

    const handleSort = (name: string) => {
        setSortColumn(name);
        if (name === sortColumn) setIsAscending(!isAscending);

        let sortBy = "";

        switch (name) {
            case "Created date":
                sortBy = "createdDt";
                break;
            default:
                sortBy = name.toLowerCase();
                break;
        }

        const sortedIssues = [...issuesList].sort((a: IIssue, b: IIssue) => {
            const x = a[sortBy].toLowerCase();
            const y = b[sortBy].toLowerCase();
            if (x < y) {
                return isAscending ? -1 : 1;
            }
            if (x > y) {
                return isAscending ? 1 : -1;
            }
            return 0;
        });

        setIssuesList(sortedIssues);
    };

    return (
        <div className="header-button" onClick={() => handleSort(props.name)}>
            <div>{props.name}</div>
            <div className="icon">
                <BiSortDown size="13px" />
            </div>
        </div>
    );
};

export default SortingHeader;
