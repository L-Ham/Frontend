import React from 'react';
import PropTypes from 'prop-types';
import {Edit} from '../../generic components/Edit';

/**
 * Renders the subreddit sidebar item.
 * @param {object} props - The props.
 * @param {string} id - The id of the sidebar item.
 * @param {string} title - The title of the sidebar item.
 * @param {JSX.Element} children - The children of the sidebar item.
 * @param {boolean} isCustomizable - The flag to check if the sidebar item is customizable.
 * @param {function} onEditClick - The function to call when the edit button is clicked.
 * @param {boolean} useDivForTitle - The flag to check if the title should be rendered as a div.
 * @return {JSX.Element} The rendered component.
 */
export function SubredditWidget({id, title, children, isCustomizable, onEditClick, useDivForTitle}) {
    const TitleTag = useDivForTitle ? 'div' : 'h2';
    return (
        <div className="relative flex flex-col  border-b bg-transparent p-5 text-left" id={id}
            style={{borderColor: 'var(baseColor)'}}>
            {isCustomizable && <Edit onEditClick={onEditClick}/>}
            <TitleTag className={`mb-2.5 text-left text-sm ${!useDivForTitle ? 'font-bold' : ''} `}>{title}</TitleTag>
            {children}
        </div>
    );
}

SubredditWidget.defaultProps = {
    isCustomizable: false,
    onEditClick: () => {},
    useDivForTitle: true,
};

SubredditWidget.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    isCustomizable: PropTypes.bool,
    onEditClick: PropTypes.func,
    useDivForTitle: PropTypes.bool,
};
