export interface IIssue {
    id: string;
    title: string;
    reporter: string;
    createdDt: string;
    description: string;
    status: IStatus;
}

export type IStatus = "open" | "pending" | "closed"

export interface IError {
    name: string;
    content: string;
}