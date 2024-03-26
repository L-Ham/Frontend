import React from 'react';
import parse from 'html-react-parser';
// components
import {SubredditWidget} from './SubredditWidget';
import {CommunityStats} from './CommunityStats';
// hooks
import {useSubreddit} from './subredditContext';

/**
 * Renders the subreddit info.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityDetailsWidget() {
    const {
        subredditName,
        subredditAbout,
    } = useSubreddit();

    console.log(subredditAbout);
    if (!subredditAbout) return (<div>Loading...</div>);

    const {public_description: descriptionHtml, user_is_moderator: isCustomizable} = subredditAbout.data;


    const description = parse(replaceHtmlEntities(descriptionHtml));

    return (
        <SubredditWidget title={subredditName} isCustomizable={isCustomizable} useDivForTitle={false}>
            <div className="mb-4 flex flex-col">
                {description}
            </div>
            <CommunityStats/>
        </SubredditWidget>
    );
}

/**
 * Replaces html entities with their respective characters
 * @param {string} str
 * @return {string}
 */
function replaceHtmlEntities(str) {
    return str.replaceAll(/&lt;/g, '<').replaceAll(/&gt;/g, '>')
        .replaceAll(/&quot;/g, '"').replaceAll(/&nbsp;/g, ' ')
        .replaceAll(/&apos;/g, '\'').replaceAll(/&amp;/g, '&');
}
