import React from "react";

import Wrapper from "components/Wrapper";
import { useAppContext } from "context";
import { IStatus } from "interfaces";

import "./styles.scss";
interface IStatusLabelProps {
    status: IStatus;
}

const Issues = () => {
    const { issuesList } = useAppContext();

    return (
        <Wrapper>
            {issuesList.length !== 0 ? (
                <div className="table-container">
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
                                            <StatusLabel status={item.status}/>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div>No results</div>
            )}
        </Wrapper>
    );
};

export default Issues;

const StatusLabel = (props: IStatusLabelProps) => <div className={`label label-${props.status}`}>{props.status}</div>;
