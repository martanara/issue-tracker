import React, { ReactNode } from "react";

import Footer from "components/Footer";
import Navbar from "components/Navbar";

interface ILayoutProps {
    children: ReactNode;
}

const Layout = (props: ILayoutProps) => {
    return (
        <React.Fragment>
            <Navbar />
            {props.children}
            <Footer />
        </React.Fragment>
    );
};

export default Layout;