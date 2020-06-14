import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal isOpen={
        !!props.selectedOption
    }
        onRequestClose={
            props.handleDeleteSelected
        }
        //allows the user to exit the modal by clicking esc or background
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className='modal'
    >
        <h3 className='modal__title'>Selected Option</h3>
        {
            props.selectedOption && <p className='modal__body'>{
                props.selectedOption
            }</p>
        }
        <button onClick={
            props.handleDeleteSelected
        }>Okay</button>
    </Modal>
);

export default OptionModal;
