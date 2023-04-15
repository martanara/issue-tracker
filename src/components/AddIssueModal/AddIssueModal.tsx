import React, { BaseSyntheticEvent, useState } from "react";

import TextInput from "components/TextInput/TextInput";
import TextArea from "components/TextArea/TextArea";
import Button from "components/Button";

import { formatDate } from "utils/formatDate";
import { useAppContext } from "context";
import { IIssue } from "interfaces";

import "./styles.scss";

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

    const [data, setData] = useState<IIssue>({ status: "open", createdDt: formatDate(new Date()) } as IIssue);

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
                <TextInput placeholder="Title" name="title" labelText="Title" value={data?.title} onChange={handleChangeState} />
                <TextInput placeholder="Reporter" name="reporter" labelText="Reporter" value={data?.reporter} onChange={handleChangeState} />
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
