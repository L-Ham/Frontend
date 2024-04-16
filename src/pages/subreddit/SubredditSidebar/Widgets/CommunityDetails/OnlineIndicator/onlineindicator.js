import React from 'react';
import propTypes from 'prop-types';
import {StatsItem} from '../StatsItem/statsitem.js';
import {classes} from './onlineindicator.styles.js';


/**
 * Renders the online indicator.
 * @param {object} props - The props.
 * @param {number} props.count - The number of users online.
 * @return {JSX.Element} The rendered component.
 */
export function OnlineIndicator({count}) {
    return (
        <StatsItem
            count={count}
            label={
                <>
                    <span className={classes.onlineIndicator} data-testid="online-indicator-span" />
                    <span data-testid="online-label-span">
                Online
                    </span>
                </>
            }
            isCap={true}
            data-testid="stats-item"
        />
    );
}

OnlineIndicator.propTypes = {
    count: propTypes.number.isRequired,
};
