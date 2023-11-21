import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './modal-dialog.scss';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.body.appendChild(modalRoot);

const ModalDialog = ({ isOpen, onClose, modalTitle, children }) => {
    const el = document.createElement('div');

    useEffect(() => {
        modalRoot.appendChild(el);
        return () => {
            modalRoot.removeChild(el);
        };
    }, [el]);

    if (!isOpen) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className='modal-dialog-wrapper'>
            <button onClick={onClose}>Close Modal</button>
            <h2 className="modal-dialog-title">{modalTitle}</h2>
            {children}
        </div>,
        el
    );
};

ModalDialog.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    modalTitle: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
};

export default ModalDialog;
