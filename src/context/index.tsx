import React, { createContext, ReactNode, useContext, useState } from "react";
import { IIssue } from "../interfaces";

export const AppContext = createContext<any>(null);

interface IContextProps {
    children: ReactNode;
}

export const AppContextProvider = (props: IContextProps) => {
    const { children } = props;

    const [issuesList, setIssuesList] = useState<IIssue[]>([]);

    return (
        <AppContext.Provider
            value={{
                issuesList,
                setIssuesList,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): IProps => {
    const { issuesList, setIssuesList } = useContext(AppContext);

    return {
        issuesList,
        setIssuesList,
    };
};

interface IProps {
    issuesList: IIssue[];
    setIssuesList: (arg: IIssue[]) => void;
}
