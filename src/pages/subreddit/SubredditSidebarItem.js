import React from 'react';
import PropTypes from 'prop-types';
import './SubredditSidebarItem.css';

/**
 * Renders the subreddit sidebar item.
 * @param {string} title - The title of the sidebar item.
 * @param {JSX.Element} children - The children of the sidebar item.
 * @return {JSX.Element} The rendered component.
 */
export function SubredditSidebarItem({title, children}) {
    return (
        <div className="subreddit-sidebar-item">
            <h3>{title}</h3>
            {children}
        </div>
    );
}

SubredditSidebarItem.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
