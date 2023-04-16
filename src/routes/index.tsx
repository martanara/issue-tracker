import React, { useLayoutEffect } from "react";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Layout from "components/Layout/Layout";
import NotFound from "pages/NotFound";
import About from "pages/About/About";
import Issues from "pages/Issues";
import Home from "pages/Home";

interface RouterWrapperProps {
    children: JSX.Element;
}

const RouterWrapper = (props: RouterWrapperProps) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [location.pathname]);

    return props.children;
};

const RoutesConfig = () => {
    return (
        <BrowserRouter>
            <RouterWrapper>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Layout>
                                <Home />
                            </Layout>
                        }
                    />
                    <Route
                        path="/issues"
                        element={
                            <Layout>
                                <Issues />
                            </Layout>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <Layout>
                                <About />
                            </Layout>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <Layout>
                                <NotFound />
                            </Layout>
                        }
                    />
                </Routes>
            </RouterWrapper>
        </BrowserRouter>
    );
};

export default RoutesConfig;
