import React from 'react';
import PropTypes from 'prop-types';
import {Edit} from '../../../../../generic components/edit.js';
import {useSubredditWidget} from './subredditwidget.hooks.js';

/**
 * Renders the subreddit sidebar item.
 * @param {object} props - The props.
 * @param {string} title - The title of the sidebar item.
 * @param {JSX.Element} children - The children of the sidebar item.
 * @param {boolean} isCustomizable - The flag to check if the sidebar item is customizable.
 * @param {function} onEditClick - The function to call when the edit button is clicked.
 *
 * @return {JSX.Element} The rendered component.
 */
export function SubredditWidget({title, children, isCustomizable=false, onEditClick=null, view=null}) {
    const {viewClasses} = useSubredditWidget({view});

    return (
        <div className={viewClasses.container} data-testid="subreddit-widget-container">
            {isCustomizable && <Edit onClick={onEditClick} data-testid="edit-button" />}
            <div className={viewClasses.header} data-testid="header-div">
                <h2 className={viewClasses.title} data-testid="title-h2">
                    {title}
                </h2>
            </div>
            {children}
        </div>
    );
}

SubredditWidget.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    isCustomizable: PropTypes.bool,
    onEditClick: PropTypes.func,
    view: PropTypes.string,
};
