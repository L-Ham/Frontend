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
    authorId,
    isFriend,
}) {
    const {
        FollowIcon,
        UnfollowIcon,
    } = useFollow();
    return (
        <>
            {isFriend ?
                <button className={followClasses.unfollow} data-testid={`unfollow-button-${authorId}`}>
                    <div className={followClasses.unfollowWrapper}>
                        <div className={followClasses.icon} data-testid={`unfollow-icon-${authorId}`}>
                            <UnfollowIcon />
                        </div>
                        <div className={followClasses.text} data-testid={`unfollow-text-${authorId}`}>
                            Unfollow
                        </div>
                    </div>
                </button> :
                <button className={followClasses.follow} data-testid={`follow-button-${authorId}`}>
                    <div className={followClasses.followWrapper}>
                        <div className={followClasses.icon} data-testid={`follow-icon-${authorId}`}>
                            <FollowIcon />
                        </div>
                        <div className={followClasses.text} data-testid={`follow-text-${authorId}`}>
                            Follow
                        </div>
                    </div>
                </button>}
        </>
    );
}

FollowButtons.propTypes = {
    authorId: PropTypes.string.isRequired,
    isFriend: PropTypes.bool.isRequired,
};
