import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders the subreddit sidebar item.
 * @param {string} title - The title of the sidebar item.
 * @param {JSX.Element} children - The children of the sidebar item.
 * @return {JSX.Element} The rendered component.
 */
export function SubredditSidebarItem({title, children}) {
    return (
        <div className="flex flex-col border-b  border-[#25201a] bg-transparent p-5 text-left">
            <h3 className='mb-2.5 text-left text-sm font-bold'>{title}</h3>
            {children}
        </div>
    );
}

SubredditSidebarItem.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
