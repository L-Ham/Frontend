import React from 'react';
import PropTypes from 'prop-types';
import {SubredditWidget} from './SubredditWidget';
import {ProfileActionCard} from '../../generic components/ProfileActionCard';
import {useSubreddit} from './subredditContext';

/**
 * Renders the user flair.
 * @param {string} username - The UserFlair of the user.
 * @param {boolean} isOwnerView - The flag to check if the user is viewing the feed.
 *  @return {JSX.Element} The rendered component.
 */
export function UserFlair() {
    const {username, isOwnerView} = useSubreddit();
    const profilePictureSrc = 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_6.png';
    return (
        <div>
            <SubredditWidget title='USER FLAIR' isOwnerView={isOwnerView}>
                <ProfileActionCard
                    key={username}
                    name={username}
                    pictureSrc={profilePictureSrc}/>
            </SubredditWidget>
        </div>
    );
}

UserFlair.propTypes = {
    username: PropTypes.string.isRequired,
    isOwnerView: PropTypes.bool,
};
