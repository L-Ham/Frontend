
import React from 'react';
import propTypes from 'prop-types';
import {useBookmarksWidget} from './bookmarks.hooks.js';
import {bookmarksWidgetClasses as classes} from './bookmarkswidget.styles.js';
import {SubredditWidget} from '../Widget/subredditwidget.js';
import {VIEW_CONTEXTS} from '../Widget/viewcontexts.js';

/**
 * Renders the community bookmarks.
 * @return {JSX.Element} The rendered component.
 */
export function BookmarksWidget({data}) {
    const {multiLinkButtonsComponents} = useBookmarksWidget({data});

    return (
        <SubredditWidget title='Community Bookmarks' view={VIEW_CONTEXTS.BOOKMARKS} data-testid="subreddit-widget">
            <div className={classes.bookmarksContainer} data-testid="bookmarks-container">
                {multiLinkButtonsComponents && multiLinkButtonsComponents}
            </div>
        </SubredditWidget>
    );
}

BookmarksWidget.propTypes = {
    data: propTypes.array.isRequired,
};
