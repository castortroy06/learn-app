import React, { useState } from 'react';
import ModalDialog from './ModalDialog';

export default {
    title: 'ShowCase/Delete movie',
    component: ModalDialog,
};

const DialogTemplate = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleClick = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <button onClick={openModal}>Open Modal</button>
            <ModalDialog modalTitle={'DELETE MOVIE'} isOpen={isOpen} onClose={closeModal}>
                <p>Are you sure want to delete this movie?</p>
                <form>
                    <button onClick={handleClick} className='btn btn-primary'>Confirm</button>
                </form>
            </ModalDialog>
        </>
    );
};

export const Default = () => <DialogTemplate />
