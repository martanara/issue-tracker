import React from "react";

import { TbEdit, TbTrash } from "react-icons/tb";

import { AddIssueModal } from "components/AddIssueModal/AddIssueModal";
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
                                {issuesList.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.title}</td>
                                            <td>{item.reporter}</td>
                                            <td>{item.createdDt}</td>
                                            <td>{item.description}</td>
                                            <td>
                                                <StatusLabel status={item.status} />
                                            </td>
                                            <td>
                                                <div className="action-button" onClick={() => console.log("click")}>
                                                    <TbEdit />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="action-button" onClick={() => deleteIssue(item.id)}>
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
