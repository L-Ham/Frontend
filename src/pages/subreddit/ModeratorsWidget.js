import React, {useState, useEffect} from 'react';
import {SubredditWidget} from './SubredditWidget';
import {ProfileActionCard} from '../../generic components/ProfileActionCard';
import {MultiLinkButton} from '../../generic components/MultiLinkButton';
import {useSubreddit} from './subredditContext';
import {getIconComponent} from '../../generic components/iconsMap';

/**
 * Renders the subreddit moderators
 * @return {JSX.Element} The rendered component.
 */
export function ModeratorsWidget() {
    const {name: subredditName} = useSubreddit();
    const [moderators, setModerators] = useState([]);

    useEffect(() => {
        getModerators(subredditName).then((moderators) => {
            setModerators(moderators);
        },
        );
    }, []);

    const MultiLinkButtons = [
        {
            links: [
                {
                    name: 'Message the mods',
                    URL: `https://www.reddit.com/message/compose?to=r%2F${subredditName}/`,
                },
            ],

        },
        {
            links: [
                {
                    name: 'View all moderators',
                    URL: `https://www.reddit.com/r/${subredditName}/about/moderators/`,
                },
            ],
        },
    ];

    return (
        <div>
            <SubredditWidget title='Moderators'>
                <div>
                    {
                        moderators.map((moderator) => {
                            const {username, profilePictureSrc} = moderator;
                            return (
                                <ProfileActionCard
                                    key={username}
                                    name={username}
                                    pictureSrc={profilePictureSrc}/>
                            );
                        },
                        )
                    }
                </div>
                <div className="mt-5">
                    {
                        MultiLinkButtons.map((MultiLinkButton) => (
                            <MultiLinkButton
                                key={MultiLinkButton.links[0].name}
                                data={MultiLinkButton}
                            />
                        ))
                    }
                </div>
            </SubredditWidget>
        </div>
    );
}

/**
 * Fetches the moderators from the Reddit API.
 * @param {string} subredditName The name of the subreddit.
 * @return {Promise} The promise object representing the API call.
 * @return {Object} The moderators.
 * */
async function getModerators(subredditName) {
    // TODO: Fetch the moderators from the Reddit API.
    // MOCKED DATA
    return (
        [
            {username: 'Luffy',
                profilePictureSrc: 'https://www.redditstatic.com/avatars/avatar_default_01_24A0ED.png'},
            {username: 'Zoro',
                profilePictureSrc: 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_6.png'},
            {username: 'Nami',
                profilePictureSrc: 'https://www.redditstatic.com/avatars/avatar_default_09_24A0ED.png'},
            {username: 'Usopp',
                profilePictureSrc: 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_7.png'},
            {username: 'Sanji',
                profilePictureSrc: 'https://www.redditstatic.com/avatars/avatar_default_05_24A0ED.png'},
            {username: 'Chopper',
                profilePictureSrc: 'https://www.redditstatic.com/avatars/avatar_default_06_24A0ED.png'},
            {username: 'Robin',
                profilePictureSrc: 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_5.png'},
            {username: 'Franky',
                profilePictureSrc: 'https://www.redditstatic.com/avatars/avatar_default_08_24A0ED.png'},
            {username: 'Brook',
                profilePictureSrc: 'https://www.redditstatic.com/avatars/avatar_default_09_24A0ED.png'},
        ]
    );
}
