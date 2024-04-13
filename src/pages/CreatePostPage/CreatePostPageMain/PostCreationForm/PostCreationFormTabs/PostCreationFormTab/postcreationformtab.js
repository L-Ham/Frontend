import React from 'react';
import PropTypes from 'prop-types';
import './postcreationformtab.css';

/**
 * Renders a post creation form tab.
 * @param {Object} props The component props.
 * @param {boolean} props.isActive If the tab is active.
 * @param {Function} props.onClick The click handler.
 * @param {string} props.Icon The icon.
 * @param {string} props.title The title.
 * @return {JSX.Element} The rendered component.
 */
export function PostCreationFormTab({isActive, onClick, Icon, title}) {
    return (
        <button className={`post-creation-form__tab relative
        z-[1] box-border flex
        flex-1 cursor-pointer items-center
        justify-center whitespace-nowrap rounded-none border-solid 
        border-[0_1px_1px_0]
        border-[color:var(--newRedditTheme-line)] px-[17px]
        text-[color:var(--newRedditTheme-actionIcon)]
        py-[15px] text-center text-[14px]/[18px] font-[700]
        outline-none ${isActive ? 'active' : ''}`} onClick={onClick}>
            {Icon && Icon}
            {title}
        </button>
    );
}

PostCreationFormTab.propTypes = {
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    Icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
