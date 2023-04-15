import React from "react";

import { AddIssueModal, EditIssueModal } from "components/AddEditIssueModal/AddEditIssueModal";
import { ConfirmDeleteModal } from "components/ConfirmDeleteModal/ConfirmDeleteModal";
import StatusLabel from "components/StatusLabel";
import Wrapper from "components/Wrapper";

import { useAppContext } from "context";

import "./styles.scss";

const Issues = () => {
    const { issuesList } = useAppContext();

    return (
        <Wrapper>
            <div className="modal-wrapper">
                <AddIssueModal />
            </div>
            {issuesList.length !== 0 ? (
                <div className="table-wrapper">
                    <div className="table-scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th style={{ width: "20%" }}>Title</th>
                                    <th style={{ width: "15%" }}>Reporter</th>
                                    <th style={{ width: "15%" }}>Created date</th>
                                    <th style={{ width: "30%" }}>Description</th>
                                    <th style={{ width: "10%" }}>Status</th>
                                    <th style={{ width: "5%" }} />
                                    <th style={{ width: "5%" }} />
                                </tr>
                            </thead>
                            <tbody>
                                {issuesList.map((issue) => {
                                    return (
                                        <tr key={issue.id}>
                                            <td>{issue.title}</td>
                                            <td>{issue.reporter}</td>
                                            <td>{issue.createdDt}</td>
                                            <td>{issue.description}</td>
                                            <td>
                                                <StatusLabel status={issue.status} />
                                            </td>
                                            <td>
                                                <EditIssueModal editedRecord={issue} />
                                            </td>
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
