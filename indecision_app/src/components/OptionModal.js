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
    >
        <h3>Selected Option</h3>
        {
        props.selectedOption && <p>{
            props.selectedOption
        }</p>
    }
        <button onClick={
            props.handleDeleteSelected
        }>Okay</button>
    </Modal>
);

export default OptionModal;
