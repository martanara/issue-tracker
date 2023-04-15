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
            description: "Please fix asap",
            isOpen: true,
            isPending: false,
            isClosed: false,
        },
        {
            id: "2",
            title: "Email campaign to cancelled users",
            reporter: "Bob Stevens",
            description: "Email to be sent out to users who cancelled",
            isOpen: false,
            isPending: true,
            isClosed: false,
        },
        {
            id: "3",
            title: "Issue in design format",
            reporter: "Paul Smith",
            description: "There is an issue with the design of some components",
            isOpen: false,
            isPending: false,
            isClosed: true,
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
