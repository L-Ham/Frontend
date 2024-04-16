/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import './postcreationformtab.css';
import {classes} from './postcreationformtab.styles';

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
      <button className={`${classes.postCreationFormTabButton} ${isActive ? 'active' : ''}`} onClick={onClick} data-testid="post-creation-form-tab-button">
    {Icon && <div data-testid="post-creation-form-tab-icon">{Icon}</div>}
    <span data-testid="post-creation-form-tab-title">{title}</span>
</button>
    );
}

PostCreationFormTab.propTypes = {
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    Icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
