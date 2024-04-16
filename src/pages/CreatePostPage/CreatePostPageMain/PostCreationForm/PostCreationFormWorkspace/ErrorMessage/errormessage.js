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
        <div>
            <div className={classes(position)}>
                <span className="truncate">{errorMessage}</span>
            </div>
        </div>
    );
}

ErrorMessage.propTypes ={
    errorMessage: PropTypes.string.isRequired,
    position: PropTypes.string,
};
