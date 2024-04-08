import React from 'react';
import PropTypes from 'prop-types';
import {formatNumber} from '../../../../generic components/utils';

/**
 * Renders a number with optional formatting.
 *
 * @param {Object} props - Component props.
 * @param {number} props.number - The number to display.
 * @param {boolean} props.isFormatedNumber - Whether to format the number as a pretty string.
 * @param {boolean} props.isCap - Indicates if capital letters should be used in formatting.
 * @return {JSX.Element} The formatted number inside a div.
 */
export const NumberFormatter = ({number, isFormatedNumber = false, isCap = false}) => {
    return (
        <div className='mr-1'>
            {isFormatedNumber ? formatNumber(number, isCap) : number}
        </div>
    );
};

NumberFormatter.propTypes = {
    number: PropTypes.number.isRequired,
    isFormatedNumber: PropTypes.bool,
    isCap: PropTypes.bool,
};

