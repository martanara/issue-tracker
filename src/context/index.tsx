import React, { createContext, ReactNode, useContext, useState } from "react";
import { IIssue } from "../interfaces";

export const AppContext = createContext<any>(null);

interface IContextProps {
    children: ReactNode;
}

export const AppContextProvider = (props: IContextProps) => {
    const { children } = props;

    const [issuesList, setIssuesList] = useState<IIssue[]>([
        {
            id: "1",
            title: "UI broken on Chrome",
            reporter: "Mary Collins",
            createdDt: "2023-04-03",
            description: "Please fix asap",
            status: "open"
        },
        {
            id: "2",
            title: "Email campaign to cancelled users",
            reporter: "Bob Stevens",
            createdDt: "2023-04-08",
            description: "Email to be sent out to users who cancelled",
            status: "pending"
        },
        {
            id: "3",
            title: "Issue in design format",
            reporter: "Paul Smith",
            createdDt: "2023-04-13",
            description: "There is an issue with the design of some components",
            status: "closed"
        },
    ]);

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
