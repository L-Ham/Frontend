import React from 'react';
import PropTypes from 'prop-types';
import {classes} from './errormessage.styles.js';

/**
 * Renders the error message.
 * @param {Object} props - The component props.
 * @param {string} props.errorMessage - The error message.
 * @param {string} props.position - The position of the error message.
 * @return {JSX.Element} The rendered component.
 */
export function ErrorMessage({errorMessage, position = ''}) {
    return (
        <div data-testid="error-message-div">
            <div className={classes(position)} data-testid="error-message-inner-div">
                <span className="truncate" data-testid="error-message-span">{errorMessage}</span>
            </div>
        </div>
    );
}

ErrorMessage.propTypes ={
    errorMessage: PropTypes.string.isRequired,
    position: PropTypes.string,
};
