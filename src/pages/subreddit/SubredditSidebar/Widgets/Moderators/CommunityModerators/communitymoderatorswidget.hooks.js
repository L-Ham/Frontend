import React from 'react';
import {UserCard} from '../Usercard/usercard';
import {MultiLinkButton} from '../../../MultilinkButton/multilinkbutton';
import {useSubreddit} from '../../../../subredditcontext';
import {getIconComponent} from '../../../../../../generic components/iconsmap';

export const useCommunityModeratorsWidget = (mods, totalMods) => {
    const {about: {data: {display_name: subredditName}}} = useSubreddit();
    const MessageIcon = getIconComponent('message', false);

    // Initialize the array with the first component
    const multiLinkButtonsComponents = [
        <MultiLinkButton
            key='message-the-mods'
            data={{
                icon: <MessageIcon/>,
                text: 'Message the mods',
                url: `https://www.reddit.com/message/compose?to=r%2F${subredditName}/`,
            }}
        />,
    ];

    // If totalMods is greater than 10, add view all moderators button
    if (totalMods > 10) {
        multiLinkButtonsComponents.push(
            <MultiLinkButton
                key='view-all-mods'
                data={{
                    text: 'View all moderators',
                    url: `https://www.reddit.com/r/${subredditName}/about/moderators/`,
                }}
            />,
        );
    }

    // Preparing moderator components
    const moderatorComponents = mods.map((moderator, index) => (
        <UserCard
            key={moderator.name || index}
            name={moderator.name}
            pictureSrc={`https://www.redditstatic.com/avatars/defaults/v2/avatar_default_7.png`}
        />
    ));

    return {
        multiLinkButtonsComponents,
        moderatorComponents,
    };
};
