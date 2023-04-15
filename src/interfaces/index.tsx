export interface IIssue {
    id: string;
    title: string;
    reporter: string;
    description: string;
    isOpen: boolean;
    isPending: boolean;
    isClosed: boolean;
}
