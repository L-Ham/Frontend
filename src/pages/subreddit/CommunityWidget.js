
import React from 'react';
import {SubredditWidget} from './SubredditWidget';
import {MultiLinkButton} from '../../generic components/MultiLinkButton';
// hooks
import {useSubreddit} from './subredditContext';

/**
 * Renders the community bookmarks.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityWidget() {
    const {name, isOwnerView: isCustomizable} = useSubreddit();
    const bookmarks = [
        {
            groupName: 'Wiki', links: [
                {
                    text: 'Wiki',
                    URL: `https://www.reddit.com/r/${name}/wiki/index`,
                },
            ],
        },
        {
            groupName: 'Discussions', links: [
                {
                    text: 'Manga Discussions',
                    URL: `https://www.reddit.com/r/${name}/wiki/manga_discussion/`,
                },
                {
                    text: 'Anime Discussions',
                    URL: `https://www.reddit.com/r/${name}/wiki/anime_discussion/`,
                },
            ],
        },
        {
            groupName: 'Latest Chapter', links: [
                {
                    text: 'Latest Chapter',
                    URL: `https://www.reddit.com/r/${name}
                    /search/?q=one+piece+chapter+flair%3ACurrent%2BChapter&restrict_sr=on
                    &sort=new&t=all`,
                },
            ],
        },
        {
            groupName: 'Resources', links: [
                {
                    text: 'Resources',
                    URL: `https://www.reddit.com/r/${name}/wiki/resources/`,
                },
            ],
        },
        {
            groupName: 'Discord', links: [
                {
                    text: 'Discord',
                    URL: `https://discord.com/invite/${name}`,
                },
            ],
        },
        {
            groupName: 'No Spoiler', links: [
                {
                    text: 'No Spoiler',
                    URL: `https://ns.reddit.com/r/${name}/`,
                },
            ],
        },
    ];

    return (
        <SubredditWidget title='Community Bookmarks' isCustomizable={isCustomizable}>
            <ul className="m-0 flex flex-col p-0">
                {bookmarks.map((bookmark) => (
                    <MultiLinkButton key={bookmark.groupName} data={bookmark}/>
                ))}
            </ul>
        </SubredditWidget>
    );
}

