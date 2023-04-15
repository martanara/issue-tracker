import React, { ReactNode } from "react";

import "./styles.scss";

interface IWrapperProps {
    children: ReactNode;
}

const Wrapper = (props: IWrapperProps) => {
    const { children } = props;

    return <div className="wrapper">{children}</div>;
};

export default Wrapper;
