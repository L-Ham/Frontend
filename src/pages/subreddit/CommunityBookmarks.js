
import React from 'react';
import PropTypes from 'prop-types';
import {SubredditSidebarItem} from './SubredditSidebarItem';
import {MultiLinkButton} from '../../generic components/MultiLinkButton';

/**
 * Renders the community bookmarks.
 * @param {string} name - The name of the subreddit.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityBookmarks({name}) {
    const bookmarks = [
        {
            buttonText: 'Wiki', targetOptions: [
                {
                    text: 'Wiki',
                    targetURL: `https://www.reddit.com/r/${name}/wiki/index`,
                },
            ],
        },
        {
            buttonText: 'Discussions', targetOptions: [
                {
                    text: 'Manga Discussions',
                    targetURL: `https://www.reddit.com/r/${name}/wiki/manga_discussion/`,
                },
                {
                    text: 'Anime Discussions',
                    targetURL: `https://www.reddit.com/r/${name}/wiki/anime_discussion/`,
                },
            ],
        },
        {
            buttonText: 'Latest Chapter', targetOptions: [
                {
                    text: 'Latest Chapter',
                    targetURL: `https://www.reddit.com/r/${name}
                    /search/?q=one+piece+chapter+flair%3ACurrent%2BChapter&restrict_sr=on
                    &sort=new&t=all`,
                },
            ],
        },
        {
            buttonText: 'Resources', targetOptions: [
                {
                    text: 'Resources',
                    targetURL: `https://www.reddit.com/r/${name}/wiki/resources/`,
                },
            ],
        },
        {
            buttonText: 'Discord', targetOptions: [
                {
                    text: 'Discord',
                    targetURL: `https://discord.com/invite/${name}`,
                },
            ],
        },
        {
            buttonText: 'No Spoiler', targetOptions: [
                {
                    text: 'No Spoiler',
                    targetURL: `https://ns.reddit.com/r/${name}/`,
                },
            ],
        },
    ];

    return (
        <SubredditSidebarItem title='Community Bookmarks'>
            <ul className="m-0 flex flex-col p-0">
                {bookmarks.map((bookmark) => (
                    <MultiLinkButton key={bookmark.buttonText} data={bookmark}/>
                ))}
            </ul>
        </SubredditSidebarItem>
    );
}

CommunityBookmarks.propTypes = {
    name: PropTypes.string.isRequired,
};
