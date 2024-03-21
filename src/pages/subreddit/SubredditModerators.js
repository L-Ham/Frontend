import React from 'react';
import PropTypes from 'prop-types';
import {SubredditSidebarItem} from './SubredditSidebarItem';
import {ProfileActionCard} from '../../generic components/ProfileActionCard';
import {LinkButton} from '../../generic components/LinkButton';
import './SubredditModerators.css';

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
        <div className="subreddit-moderators">
            <SubredditSidebarItem title='Moderators'>
                <div className="subreddit-moderators__users">
                    {
                        users.map((user) => (
                            <ProfileActionCard
                                key={user.username}
                                name={`u/${user.username}`}
                                pictureSrc={user.profilePictureSrc}/>
                        ))
                    }
                </div>
                <div className="subreddit-moderators__action-items">
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
