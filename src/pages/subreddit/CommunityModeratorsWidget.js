import React from 'react';
import propTypes from 'prop-types';
import {SubredditWidget} from './SubredditWidget';
import {UserCard} from './UserCard';
import {MultiLinkButton} from '../../generic components/MultiLinkButton';
import {useSubreddit} from './subredditContext';
import {getIconComponent} from '../../generic components/iconsMap';

/**
 * Renders the subreddit moderators
 * @param {object} props - The props.
 * @param {string} props.id - The id of the widget.
 * @param {object} props.styles - The styles for the widget.
 * @param {Array} props.mods - The moderators of the subreddit.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityModeratorsWidget({id, styles, mods, totalMods}) {
    const {about: {data: {display_name: subredditName}}} = useSubreddit();
    const MessageIcon = getIconComponent('message', false);
    const multiLinkButtons = totalMods <= 10 ?
        [
            {
                icon: <MessageIcon className='mr-2'/>,
                text: 'Message the mods',
                url: `https://www.reddit.com/message/compose?to=r%2F${subredditName}/`,
            },
        ] :
        [
            {
                icon: <MessageIcon className='mr-2'/>,
                text: 'Message the mods',
                url: `https://www.reddit.com/message/compose?to=r%2F${subredditName}/`,
            },
            {
                text: 'View all moderators',
                url: `https://www.reddit.com/r/${subredditName}/about/moderators/`,
            },
        ];

    if (!mods) return null;

    return (
        <div>
            <SubredditWidget title='Moderators' id={id} styles={styles}>
                <div>
                    {
                        mods.map((moderator) => {
                            const {name} = moderator;
                            // TODO: replace with actual profile picture
                            const profilePictureSrc = `https://www.redditstatic.com/avatars/defaults/v2/`+
                            `avatar_default_7.png`;
                            return (
                                <UserCard
                                    key={name}
                                    name={name}
                                    pictureSrc={profilePictureSrc}
                                    isLink = {true}
                                />
                            );
                        },
                        )
                    }
                </div>
                <div className="mt-5">
                    {
                        multiLinkButtons.map((multiLinkButton, idx) => {
                            const {text, children} = multiLinkButton;
                            return (
                                <MultiLinkButton
                                    key={text ? text : children? children.text : idx}
                                    data={multiLinkButton}
                                />
                            );
                        })
                    }
                </div>
            </SubredditWidget>
        </div>
    );
}

CommunityModeratorsWidget.propTypes = {
    id: propTypes.string.isRequired,
    styles: propTypes.object.isRequired,
    mods: propTypes.array.isRequired,
    totalMods: propTypes.number.isRequired,
};
