import React from 'react';
import {UserCard} from '../Usercard/usercard.js';
import {MultiLinkButton} from '../../../MultilinkButton/multilinkbutton.js';
import {useSubreddit} from '../../../../subredditcontext.js';
import {getIconComponent} from '../../../../../../generic components/iconsmap.js';


export const useCommunityModeratorsWidget = ({moderators, totalMods}) => {
    const {about} = useSubreddit();
    if (!about) return null;

    const {communityDetails: {name: subredditName}} = about;

    const MessageIcon = getIconComponent('message', false);

    // Initialize the array with the first component
    const multiLinkButtonsComponents = [
        <MultiLinkButton
            key='message-the-moderators'
            data={{
                icon: <MessageIcon/>,
                text: 'Message the moderators',
                url: `https://www.reddit.com/message/compose?to=r%2F${subredditName}/`,
            }}
        />,
    ];

    // If totalMods is greater than 10, add view all moderators button
    if (totalMods > 10) {
        multiLinkButtonsComponents.push(
            <MultiLinkButton
                key='view-all-moderators'
                data={{
                    text: 'View all moderators',
                    url: `https://www.reddit.com/r/${subredditName}/about/moderators/`,
                }}
            />,
        );
    }

    // Preparing moderator components
    const moderatorComponents = moderators.map((moderator, index) => (
        <UserCard
            key={moderator.username || index}
            name={moderator.username}
            pictureSrc={moderator.avatarImage}
        />
    ));

    return {
        multiLinkButtonsComponents,
        moderatorComponents,
    };
};
