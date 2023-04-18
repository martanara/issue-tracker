import React from "react";

import { IStatus } from "interfaces/interfaces";

import "./styles.scss";

interface IStatusLabelProps {
    status: IStatus;
}

const StatusLabel = (props: IStatusLabelProps) => {
    const capitalizedStatus = props.status.charAt(0).toUpperCase() + props.status.slice(1);

    return <div className={`label label-${props.status}`}>{capitalizedStatus}</div>;
};

export default StatusLabel;
