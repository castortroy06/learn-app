import React, { useState } from 'react';
import ModalDialog from './ModalDialog';
import MovieForm from '../MovieForm/MovieForm';

export default {
  title: 'Modal Dialog',
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

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <ModalDialog modalTitle={'Test form'} isOpen={isOpen} onClose={closeModal}>
        <MovieForm />
      </ModalDialog>
    </>
  );
};

export const Default = () => <DialogTemplate />
