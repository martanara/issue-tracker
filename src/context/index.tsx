import React, { createContext, ReactNode, useContext, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { IIssue } from "../interfaces";

export const AppContext = createContext<any>(null);

interface IContextProps {
    children: ReactNode;
}

interface IAddNewIssueProps {
    data: IIssue;
}

interface IEditIssueProps {
    data: IIssue;
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
            status: "open",
        },
        {
            id: "2",
            title: "Email campaign to cancelled users",
            reporter: "Bob Stevens",
            createdDt: "2023-04-08",
            description: "Email to be sent out to users who cancelled",
            status: "pending",
        },
        {
            id: "3",
            title: "Issue in design format",
            reporter: "Paul Smith",
            createdDt: "2023-04-13",
            description: "There is an issue with the design of some components",
            status: "closed",
        },
    ]);

    const addNewIssue = (props: IAddNewIssueProps) => {
        setIssuesList([...issuesList, { ...props.data, id: uuidv4() }]);
    };

    const deleteIssue = (id: string) => {
        setIssuesList(issuesList.filter((issue) => issue.id !== id));
    };

    const editIssue = (props: IEditIssueProps) => {
        console.log(props.data)
        const updatedArray = [...issuesList];
        const index = updatedArray.findIndex((obj) => obj.id === props.data.id);
        updatedArray[index] = { ...updatedArray[index], ...props.data };
        setIssuesList(updatedArray);
    };

    return (
        <AppContext.Provider
            value={{
                issuesList,
                setIssuesList,
                addNewIssue,
                deleteIssue,
                editIssue,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): IProps => {
    const { issuesList, setIssuesList, addNewIssue, deleteIssue, editIssue } = useContext(AppContext);

    return {
        issuesList,
        setIssuesList,
        addNewIssue,
        deleteIssue,
        editIssue,
    };
};

interface IProps {
    issuesList: IIssue[];
    setIssuesList: (arg: IIssue[]) => void;
    addNewIssue: (arg: IIssue) => void;
    deleteIssue: (arg: string) => void;
    editIssue: (arg: IIssue) => void;
}
