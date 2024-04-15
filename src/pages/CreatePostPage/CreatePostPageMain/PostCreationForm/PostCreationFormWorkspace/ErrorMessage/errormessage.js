import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders the error message.
 * @param {Object} props - The component props.
 * @param {string} props.errorMessage - The error message.
 * @param {string} props.position - The position of the error message.
 * @return {JSX.Element} The rendered component.
 */
export function ErrorMessage({errorMessage, position = ''}) {
    const positionCLass = `${position ? 'justify-${position}' : ''}`;
    return (
        <div>
            <div className={`flex pt-[4px] ${positionCLass} text-[12px]/[16px] font-[400] text-[red]`}>
                <span className="truncate">{errorMessage}</span>
            </div>
        </div>
    );
}

ErrorMessage.propTypes ={
    errorMessage: PropTypes.string.isRequired,
    position: PropTypes.string,
};
