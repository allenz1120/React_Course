import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className='widget_header'>
            <h3 className='widget_header__title'>Your Options</h3>
            <button className='button button--link'
                onClick={props.handleDeleteOptions}>
                Remove All
        </button>
        </div>

        {props.options.length === 0 && <p>Please add an option to get started</p>}
        <ol>
            {
                props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption} />
                ))
            }
        </ol>
    </div>
);

export default Options;