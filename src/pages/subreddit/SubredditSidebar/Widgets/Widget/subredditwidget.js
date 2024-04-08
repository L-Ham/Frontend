import React from 'react';
import PropTypes from 'prop-types';
import {Edit} from '../../../../../generic components/edit';
import {useSubredditWidget} from './subredditwidget.hooks';

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
export function SubredditWidget({title, children, isCustomizable=false, onEditClick, view}) {
    const {viewClasses} = useSubredditWidget(view);

    return (
        <div className={viewClasses.container}>
            {isCustomizable && <Edit onClick={onEditClick} />}
            <div className={viewClasses.header}>
                <h2 className={viewClasses.title}>
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
