import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "components/Layout/Layout";
import NotFound from "pages/NotFound";
import About from "pages/About/About";
import Issues from "pages/Issues";
import Home from "pages/Home";

const RoutesConfig = () => {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
};

export default RoutesConfig;
