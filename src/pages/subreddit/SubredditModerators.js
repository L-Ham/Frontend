import React from 'react';
import {SubredditWidget} from './SubredditWidget';
import {ProfileActionCard} from '../../generic components/ProfileActionCard';
import {MultiLinkButton} from '../../generic components/MultiLinkButton';
import {getIconComponent} from '../../generic components/iconsMap';
import {useSubreddit} from './subredditContext';

/**
 * Renders the subreddit moderators
 * @return {JSX.Element} The rendered component.
 */
export function SubredditModerators() {
    const {users, name} = useSubreddit();
    const MessageIcon = getIconComponent('message', false);
    const MultiLinkButtons = [
        {
            buttonText: 'Message the mods',
            icon: <MessageIcon className='mr-1'/>,
            targetOptions: [
                {
                    text: 'Message the mods',
                    targetURL: `https://www.reddit.com/message/compose?to=r%2F${name}/`,
                },
            ],

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
            <SubredditWidget title='Moderators'>
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
                        MultiLinkButtons.map((data) => (
                            <MultiLinkButton
                                key={data.buttonText}
                                data={data}
                            />
                        ))
                    }
                </div>
            </SubredditWidget>
        </div>
    );
}
