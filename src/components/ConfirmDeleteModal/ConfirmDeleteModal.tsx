import React, { useState } from "react";

import { TbTrash } from "react-icons/tb";
import { AiOutlineExclamationCircle } from "react-icons/ai";

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
                    headerText="Are you sure you want to delete this issue?"
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
        <div className="confirm-modal">
            <div className="confirm-modal-content">
                <AiOutlineExclamationCircle size={100} />
                <div className="confirm-modal-message">
                    <p>{headerText}</p>
                </div>
                <div className="confirm-modal-footer">
                    <Button text="Cancel" className="dark-blue" outline onClick={handleCloseModal} />
                    <Button text="Proceed" className="hot-pink" onClick={() => deleteIssue(issueId)} />
                </div>
            </div>
        </div>
    );
};
