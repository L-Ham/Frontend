import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {followClasses} from './follow.styles.js';
import {useFollow} from './follow.hooks.js';
import {API_ROUTES} from '../../../../../../requests/routes.js';
import {axiosInstance as axios} from '../../../../../../requests/axios.js';
/**
 * FollowButtons component
 * @param {string} authorId
 * @param {boolean} isFriend
 * @param {string} username
 * @return {React.Component}
 */
export function FollowButtons({
    userId,
    isFriend,
    username,
}) {
    const {
        FollowIcon,
        UnfollowIcon,
    } = useFollow();
    const [friend, setFriend] = useState(isFriend);
    const handleFollow = () => {
        const handler = async () => {
            try {
                await axios.patch(API_ROUTES.followUser, {usernameToFollow: username});
            } catch (error) {
                console.error('Error:', error);
            }
        };
        handler().then(() => setFriend(true));
    };
    const handleUnfollow = () => {
        const handler = async () => {
            try {
                await axios.patch(API_ROUTES.unfollowUser, {usernameToUnfollow: username});
            } catch (error) {
                console.error('Error:', error);
            }
        };
        handler().then(() => setFriend(false));
    };
    return (
        <>
            {friend ?
                <button className={followClasses.unfollow} data-testid={`unfollow-button-${userId}`}
                    onClick={handleUnfollow}
                >
                    <div className={followClasses.unfollowWrapper}>
                        <div className={followClasses.icon} data-testid={`unfollow-icon-${userId}`}>
                            <UnfollowIcon />
                        </div>
                        <div className={followClasses.text} data-testid={`unfollow-text-${userId}`}>
                            Unfollow
                        </div>
                    </div>
                </button> :
                <button className={followClasses.follow} data-testid={`follow-button-${userId}`}
                    onClick={handleFollow}
                >
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
    username: PropTypes.string.isRequired,
};
