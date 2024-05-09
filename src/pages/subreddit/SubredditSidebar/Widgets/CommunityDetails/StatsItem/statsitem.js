import React from 'react';
import propTypes from 'prop-types';
import {NumberFormatter} from '../../../../General/Components/numberformatter.js';
import {classes} from './statsitem.styles.js';

/**
 * Renders the stats item.
 * @param {object} props - The props.
 * @param {number} props.count - The number to display.
 * @param {string} props.label - The label to display.
 * @param {boolean} props.isCap - Whether to display the number in caps.
 * @return {JSX.Element} The rendered component.
 */
export function StatsItem({count, label, isCap}) {
    return (
        <div className={classes.statsItem} data-testid="stats-item">
            <span data-testid="count-span">
                <strong data-testid="count-strong">
                    <NumberFormatter isFormattedNumber={true}
                        number={count} isCap={isCap} data-testid="number-formatter"/>
                </strong>
            </span>
            <span className={classes.statsText} data-testid="label-span">{label}</span>
        </div>
    );
}

StatsItem.propTypes = {
    count: propTypes.number.isRequired,
    label: propTypes.string.isRequired,
    isCap: propTypes.bool.isRequired,
};
