import React from 'react';
import PropTypes from 'prop-types';
import {SubredditSidebarItem} from './SubredditSidebarItem';
import {ProfileActionCard} from '../../generic components/ProfileActionCard';
import {LinkButton} from '../../generic components/LinkButton';

/**
 * Renders the subreddit moderators
 * @param {object} users - The moderators of the subreddit.
 * @param {string} name - The name of the subreddit.
 * @return {JSX.Element} The rendered component.
 */
export function SubredditModerators({users, name}) {
    const linkButtons = [
        {
            buttonText: 'Message the mods', targetOptions: [
                {
                    text: 'Message the mods',
                    targetURL: `https://www.reddit.com/message/compose?to=r%2F${name}/`,
                },
            ],
            icon: 'email',
        },
        {
            buttonText: 'View all moderators', targetOptions: [
                {
                    text: 'View all moderators',
                    targetURL: `https://www.reddit.com/r/${name}/about/moderators/`,
                },
            ],
        },
    ];

    return (
        <div>
            <SubredditSidebarItem title='Moderators'>
                <div>
                    {
                        users.map((user) => (
                            <ProfileActionCard
                                key={user.username}
                                name={`u/${user.username}`}
                                pictureSrc={user.profilePictureSrc}/>
                        ))
                    }
                </div>
                <div className="mt-5">
                    {
                        linkButtons.map((data) => (
                            <LinkButton
                                key={data.name}
                                data={data}
                            />
                        ))
                    }
                </div>
            </SubredditSidebarItem>
        </div>
    );
}

SubredditModerators.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string.isRequired,
        profilePictureSrc: PropTypes.string.isRequired,
    })).isRequired,
    name: PropTypes.string.isRequired,
};
