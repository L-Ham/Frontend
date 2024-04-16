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
        <div className={classes.container} data-testid="container">
            <h1 className={classes.communityHeader} data-testid="community-header">
                {displayNamePrefixed}
            </h1>
            <div className={classes.statsContainer} data-testid="stats-container">
                <span className={classes.memberCountText} data-testid="member-count-text">
                    <NumberFormatter number={subscribersCount} isFormattedNumber={true} isCap={false}/>
            members
                </span>
                <div className={classes.onlineUsersContainer} data-testid="online-users-container">
                    <span className={classes.onlineIndicator} data-testid="online-indicator" />
                    <span className={classes.onlineCountText} data-testid="online-count-text">
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
