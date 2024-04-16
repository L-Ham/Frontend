import React from 'react';
import PropTypes from 'prop-types';
import {formatNumber} from '../../../../generic components/utils.js';

/**
 * Renders a number with optional formatting.
 *
 * @param {Object} props - Component props.
 * @param {number} props.number - The number to display.
 * @param {boolean} props.isFormattedNumber - Whether to format the number as a pretty string.
 * @param {boolean} props.isCap - Indicates if capital letters should be used in formatting.
 * @return {JSX.Element} The formatted number inside a div.
 */
export function NumberFormatter({number, isFormattedNumber = false, isCap = false}) {
    return (
        <div className='mr-1 text-[var(--color-tone-1)]' data-testid="number-formatter">
            {isFormattedNumber ? formatNumber(number, isCap) : number}
        </div>
    );
}

NumberFormatter.propTypes = {
    number: PropTypes.number.isRequired,
    isFormattedNumber: PropTypes.bool,
    isCap: PropTypes.bool,
};

