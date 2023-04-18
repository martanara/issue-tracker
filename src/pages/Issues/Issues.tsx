import React, { useEffect, useState } from "react";

import { Tooltip } from "react-tooltip";

import { AddIssueModal, EditIssueModal } from "components/AddEditIssueModal/AddEditIssueModal";
import { ConfirmDeleteModal } from "components/ConfirmDeleteModal/ConfirmDeleteModal";
import StatusDropdownMenu from "components/StatusDropdownMenu";
import SortingHeader from "components/SortingHeader";
import Wrapper from "components/Wrapper";

import { IIssue } from "interfaces/interfaces";
import { useAppContext } from "context/context";

import "./styles.scss";

const Issues = () => {
    const { issuesList } = useAppContext();

    const [issuesToDisplay, setIssuesToDisplay] = useState<IIssue[]>([]);

    useEffect(() => {
        setIssuesToDisplay(issuesList);
    }, [issuesList]);

    return (
        <Wrapper>
            <div className="modal-wrapper">
                <AddIssueModal />
            </div>
            <Tooltip id="my-tooltip" className="tooltip" />
            {issuesToDisplay.length !== 0 ? (
                <div className="table-wrapper">
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th style={{ width: "20%" }}>
                                        <SortingHeader name="Title" />
                                    </th>
                                    <th style={{ width: "15%" }}>
                                        <SortingHeader name="Reporter" />
                                    </th>
                                    <th style={{ width: "15%" }}>
                                        <SortingHeader name="Created date" />
                                    </th>
                                    <th style={{ width: "30%" }}>Description</th>
                                    <th style={{ width: "10%" }}>
                                        <SortingHeader name="Status" />
                                    </th>
                                    <th style={{ width: "5%" }} />
                                    <th style={{ width: "5%" }} />
                                </tr>
                            </thead>
                            <tbody>
                                {issuesToDisplay.map((issue) => {
                                    return (
                                        <tr key={issue.id}>
                                            <td>{issue.title}</td>
                                            <td>{issue.reporter}</td>
                                            <td>{issue.createdDt}</td>
                                            <td>
                                                {issue.description.length > 100 ? (
                                                    <p data-tooltip-id="my-tooltip" data-tooltip-content={issue.description}>
                                                        {issue.description}
                                                    </p>
                                                ) : (
                                                    issue.description
                                                )}
                                            </td>
                                            <td>
                                                <StatusDropdownMenu issue={issue} />
                                            </td>
                                            <td>{issue.status !== "closed" && <EditIssueModal editedRecord={issue} />}</td>
                                            <td>
                                                <ConfirmDeleteModal issueId={issue.id} />
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <div>No results</div>
            )}
        </Wrapper>
    );
};

export default Issues;
