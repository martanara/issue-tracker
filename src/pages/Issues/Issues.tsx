import React from "react";

import { AddIssueModal } from "components/AddIssueModal/AddIssueModal";
import StatusLabel from "components/StatusLabel";
import Wrapper from "components/Wrapper";

import { useAppContext } from "context";

import "./styles.scss";

const Issues = () => {
    const { issuesList } = useAppContext();

    return (
        <Wrapper>
            <AddIssueModal />
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
                                <th style={{ width: "20%" }}>Status</th>
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
