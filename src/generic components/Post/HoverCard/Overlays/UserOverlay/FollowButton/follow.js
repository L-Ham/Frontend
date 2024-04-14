import React from 'react';
import PropTypes from 'prop-types';
import {followClasses} from './follow.styles.js';
import {useFollow} from './follow.hooks.js';
/**
 * FollowButtons component
 * @param {string} authorId
 * @param {boolean} isFriend
 * @return {React.Component}
 */
export function FollowButtons({
    userId,
    isFriend,
}) {
    const {
        FollowIcon,
        UnfollowIcon,
    } = useFollow();
    return (
        <>
            {isFriend ?
                <button className={followClasses.unfollow} data-testid={`unfollow-button-${userId}`}>
                    <div className={followClasses.unfollowWrapper}>
                        <div className={followClasses.icon} data-testid={`unfollow-icon-${userId}`}>
                            <UnfollowIcon />
                        </div>
                        <div className={followClasses.text} data-testid={`unfollow-text-${userId}`}>
                            Unfollow
                        </div>
                    </div>
                </button> :
                <button className={followClasses.follow} data-testid={`follow-button-${userId}`}>
                    <div className={followClasses.followWrapper}>
                        <div className={followClasses.icon} data-testid={`follow-icon-${userId}`}>
                            <FollowIcon />
                        </div>
                        <div className={followClasses.text} data-testid={`follow-text-${userId}`}>
                            Follow
                        </div>
                    </div>
                </button>}
        </>
    );
}

FollowButtons.propTypes = {
    userId: PropTypes.string.isRequired,
    isFriend: PropTypes.bool.isRequired,
};
