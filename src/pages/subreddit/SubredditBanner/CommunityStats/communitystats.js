import React from 'react';
import PropTypes from 'prop-types';
import {classes} from './communitystats.styles.js';
import {NumberFormatter} from '../../General/Components/numberformatter.js';

/**
 * Renders the community stats.
 * @param {object} props The component props.
 * @param {string} props.displayNamePrefixed The display name prefixed.
 * @param {number} props.subscribersCount The number of subscribers.
 * @param {number} props.activeUserCount The number of active users.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityStats({displayNamePrefixed, subscribersCount, activeUserCount}) {
    return (
        <div className={classes.container}>
            <h1 className={classes.communityHeader}>
                {displayNamePrefixed}
            </h1>
            <div className={classes.statsContainer}>
                <span className={classes.memberCountText}>
                    <NumberFormatter number={subscribersCount} isFormattedNumber={true} isCap={false}/>
                members
                </span>
                <div className={classes.onlineUsersContainer}>
                    <span className={classes.onlineIndicator} />
                    <span className={classes.onlineCountText}>
                        <NumberFormatter number={activeUserCount}
                            isFormattedNumber={true} isCap={true}/>
                    online
                    </span>
                </div>
            </div>
        </div>
    );
}

CommunityStats.propTypes = {
    displayNamePrefixed: PropTypes.string.isRequired,
    subscribersCount: PropTypes.number.isRequired,
    activeUserCount: PropTypes.number.isRequired,
};
