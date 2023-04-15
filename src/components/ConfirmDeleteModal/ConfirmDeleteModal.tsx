import React, { useState } from "react";

import { TbTrash } from "react-icons/tb";

import Button from "components/Button";

import { useAppContext } from "context";

import "./styles.scss";

interface IConfirmDeleteModalProps {
    issueId: string;
}

interface IModalContent extends IConfirmDeleteModalProps {
    modalOpen: boolean;
    handleToggleModal: (modalState: boolean) => void;
    action: Function;
    headerText: string;
}

export const ConfirmDeleteModal = (props: IConfirmDeleteModalProps) => {
    const { addNewIssue } = useAppContext();

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    return (
        <>
            <div className={"action-button"} onClick={() => setModalOpen(true)}>
                <TbTrash />
            </div>
            {modalOpen && (
                <ModalContent
                    {...props}
                    handleToggleModal={(modalOpen) => setModalOpen(modalOpen)}
                    modalOpen={modalOpen}
                    action={addNewIssue}
                    headerText="Are you sure?"
                />
            )}
        </>
    );
};

export const ModalContent = (props: IModalContent) => {
    const { deleteIssue } = useAppContext();

    const { handleToggleModal, headerText, issueId } = props;

    const handleCloseModal = () => handleToggleModal(false);

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">{headerText}</div>
                <div className="modal-footer">
                    <Button text="Cancel" className="dark-blue" onClick={handleCloseModal} />
                    <Button text="Proceed" className="dark-blue" onClick={() => deleteIssue(issueId)} />
                </div>
            </div>
        </div>
    );
};
