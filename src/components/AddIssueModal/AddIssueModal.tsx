import React, { BaseSyntheticEvent, useState } from "react";

import TextInput from "components/TextInput/TextInput";
import Button from "components/Button";

import { IIssue } from "interfaces";

import "./styles.scss";
import { useAppContext } from "context";

interface IAddIssueModalProps {}

interface IModalContent extends IAddIssueModalProps {
    modalOpen: boolean;
    handleToggleModal: (modalState: boolean) => void;
    action: Function;
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
                />
            )}
        </>
    );
};

export const ModalContent = (props: IModalContent) => {
    const { handleToggleModal, action } = props;

    const [data, setData] = useState<IIssue>({ status: "open" } as IIssue);

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
                <div className="modal-header"></div>
                <TextInput placeholder="Title" name="title" value={data?.title} onChange={handleChangeState} />
                <TextInput placeholder="Reporter" name="reporter" value={data?.reporter} onChange={handleChangeState} />
                <TextInput placeholder="Description" name="description" value={data?.description} onChange={handleChangeState} />
                <div className="modal-footer">
                    <Button text="Cancel" className="dark-blue" onClick={handleCloseModal} />
                    <Button text="Save changes" className="dark-blue" onClick={handleSubmitIssue} />
                </div>
            </div>
        </div>
    );
};
