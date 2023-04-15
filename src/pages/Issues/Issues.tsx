import React from "react";

import { TbTrash } from "react-icons/tb";

import { AddIssueModal, EditIssueModal } from "components/AddEditIssueModal/AddEditIssueModal";
import StatusLabel from "components/StatusLabel";
import Wrapper from "components/Wrapper";

import { useAppContext } from "context";

import "./styles.scss";

const Issues = () => {
    const { issuesList, deleteIssue } = useAppContext();

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
                                                <div className="action-button" onClick={() => deleteIssue(issue.id)}>
                                                    <TbTrash />
                                                </div>
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
