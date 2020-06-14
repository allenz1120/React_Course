import React from "react";

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };
    handleAddOption = (eventObject) => {
        eventObject.preventDefault();

        const option = eventObject.target.elements.inOption.value.trim();
        const inError = this.props.handleAddOption(option);

        this.setState(() => ({ error: inError }))

        if (!inError) {
            eventObject.target.elements.inOption.value = '';
        }

    };
    render() {
        return (
            <div>
                {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
                <form className='add-option' onSubmit={this.handleAddOption}>
                    <input className='add-option__input' type='text' name='inOption' />
                    <button className='button'>Add Option</button>
                </form>
            </div>
        );
    }
}