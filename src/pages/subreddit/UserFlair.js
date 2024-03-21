import React from 'react';
import PropTypes from 'prop-types';
import {SubredditSidebarItem} from './SubredditSidebarItem';
import {ProfileActionCard} from '../../generic components/ProfileActionCard';

/**
 * Renders the user flair.
 * @param {string} username - The UserFlair of the user.
 *  @return {JSX.Element} The rendered component.
 */
export function UserFlair({username}) {
    const profilePictureSrc = 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_6.png';
    return (
        <div>
            <SubredditSidebarItem title='USER FLAIR'>
                <ProfileActionCard
                    key={username}
                    name={username}
                    pictureSrc={profilePictureSrc}/>
            </SubredditSidebarItem>
        </div>
    );
}

UserFlair.propTypes = {
    username: PropTypes.string.isRequired,
};
