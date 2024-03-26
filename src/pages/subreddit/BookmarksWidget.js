
import React from 'react';
import propTypes from 'prop-types';
import {SubredditWidget} from './SubredditWidget';
import {MultiLinkButton} from '../../generic components/MultiLinkButton';
// hooks
import {useSubreddit} from './subredditContext';

/**
 * Renders the community bookmarks.
 * @return {JSX.Element} The rendered component.
 */
export function BookmarksWidget({id, styles, data}) {
    const {about} = useSubreddit();
    if (!about) return <div>Loading...</div>;

    const {data: {user_is_moderator: isCustomizable}} = about;

    return (
        <SubredditWidget id={id} title='Community Bookmarks' isCustomizable={isCustomizable}>
            <ul className="m-0 flex flex-col p-0">
                {data.map((bookmark) => (
                    <MultiLinkButton key={bookmark.text} data={bookmark}/>
                ))}
            </ul>
        </SubredditWidget>
    );
}

BookmarksWidget.propTypes = {
    id: propTypes.string.isRequired,
    styles: propTypes.object.isRequired,
    data: propTypes.array.isRequired,
};
