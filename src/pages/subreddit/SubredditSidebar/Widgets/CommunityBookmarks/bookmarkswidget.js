
import React from 'react';
import propTypes from 'prop-types';
import {useBookmarksWidget} from './bookmarks.hooks';
import {bookmarksWidgetClasses as classes} from './bookmarkswidget.styles';
import {SubredditWidget} from '../Widget/subredditwidget';
import {VIEW_CONTEXTS} from '../Widget/viewcontexts';

/**
 * Renders the community bookmarks.
 * @return {JSX.Element} The rendered component.
 */
export function BookmarksWidget({data}) {
    const {multiLinkButtonsComponents} = useBookmarksWidget(data);

    return (
        <SubredditWidget title='Community Bookmarks' view={VIEW_CONTEXTS.BOOKMARKS}>
            <div className={classes.bookmarksContainer}>
                {multiLinkButtonsComponents && multiLinkButtonsComponents}
            </div>
        </SubredditWidget>
    );
}

BookmarksWidget.propTypes = {
    data: propTypes.array.isRequired,
};
