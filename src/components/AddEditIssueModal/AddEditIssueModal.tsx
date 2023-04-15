import React, { BaseSyntheticEvent, useEffect, useState } from "react";

import { TbEdit } from "react-icons/tb";

import TextInput from "components/TextInput/TextInput";
import TextArea from "components/TextArea/TextArea";
import Button from "components/Button";

import { formatDate } from "utils/formatDate";
import { useAppContext } from "context";
import { IIssue } from "interfaces";

import "./styles.scss";

interface IAddIssueModalProps {
    editedRecord?: IIssue;
}

interface IModalContent extends IAddIssueModalProps {
    modalOpen: boolean;
    handleToggleModal: (modalState: boolean) => void;
    action: Function;
    headerText: string;
}

export const AddIssueModal = (props: IAddIssueModalProps) => {
    const { addNewIssue } = useAppContext();

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    return (
        <>
            <Button onClick={() => setModalOpen(true)} text="Add issue" />
            {modalOpen && (
                <ModalContent
                    {...props}
                    handleToggleModal={(modalOpen) => setModalOpen(modalOpen)}
                    modalOpen={modalOpen}
                    action={addNewIssue}
                    headerText="Add new issue"
                />
            )}
        </>
    );
};

export const EditIssueModal = (props: IAddIssueModalProps) => {
    const { editIssue } = useAppContext();

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    return (
        <>
            <div className={"action-button"} onClick={() => setModalOpen(true)}>
                <TbEdit />
            </div>
            {modalOpen && (
                <ModalContent
                    {...props}
                    handleToggleModal={(modalOpen) => setModalOpen(modalOpen)}
                    modalOpen={modalOpen}
                    action={editIssue}
                    headerText="Edit issue"
                />
            )}
        </>
    );
};

export const ModalContent = (props: IModalContent) => {
    const { handleToggleModal, action, editedRecord, headerText } = props;

    const [data, setData] = useState<IIssue>({ status: "open", createdDt: formatDate(new Date()) } as IIssue);

    useEffect(() => {
        editedRecord && setData(editedRecord);
    }, [editedRecord]);

    const handleCloseModal = () => handleToggleModal(false);

    const handleChangeState = (e: BaseSyntheticEvent) => {
        const { name, value } = e.target;

        setData({ ...data, [name]: value || "" } as IIssue);
    };

    const handleSubmitIssue = () => {
        if (data.title && data.reporter) {
            action({ data });
        }
        handleCloseModal();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">{headerText}</div>
                <TextInput placeholder="Title" name="title" labelText="Title" value={data?.title} onChange={handleChangeState} />
                <TextInput
                    placeholder="Reporter"
                    name="reporter"
                    labelText="Reporter"
                    value={data?.reporter}
                    onChange={handleChangeState}
                />
                <TextArea
                    placeholder="Description"
                    name="description"
                    labelText="Description"
                    value={data?.description}
                    onChange={handleChangeState}
                />
                <div className="modal-footer">
                    <Button text="Cancel" className="dark-blue" onClick={handleCloseModal} />
                    <Button text="Save changes" className="dark-blue" onClick={handleSubmitIssue} />
                </div>
            </div>
        </div>
    );
};
