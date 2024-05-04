
import React from 'react';
import propTypes from 'prop-types';
import {useBookmarksWidget} from './bookmarks.hooks.js';
import {bookmarksWidgetClasses as classes} from './bookmarkswidget.styles.js';
import {SubredditWidget} from '../Widget/subredditwidget.js';
import {VIEW_CONTEXTS} from '../Widget/viewcontexts.js';

/**
 * Renders the community bookmarks.
 * @param {boolean} props.isCustomizable - The flag to check if the widget is customizable.
 * @param {function} props.onEditClick - The function to call when the edit button is clicked.
 * @param {Object} props.data - The data for the widget.
 * @param {string} props.widgetName - The name of the widget.
 * @return {JSX.Element} The rendered component.
 */
export function BookmarksWidget({buttons: data, widgetName, description,
    isCustomizable=false, onEditClick=null}) {
    const {multiLinkButtonsComponents} = useBookmarksWidget({data});

    return (
        <SubredditWidget title={widgetName} view={VIEW_CONTEXTS.BOOKMARKS} data-testid="subreddit-widget"
            isCustomizable={isCustomizable}
            onEditClick={onEditClick}>
            <div className={classes.bookmarksContainer} data-testid="bookmarks-container">
                {multiLinkButtonsComponents && multiLinkButtonsComponents}
            </div>
        </SubredditWidget>
    );
}

BookmarksWidget.propTypes = {
    buttons: propTypes.array.isRequired,
    isCustomizable: propTypes.bool,
    onEditClick: propTypes.func,
    widgetName: propTypes.string.isRequired,
    description: propTypes.string,
};
