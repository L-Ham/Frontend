import React from 'react';
import PropTypes from 'prop-types';
import {PostCreationFormTab} from './PostCreationFormTab/postcreationformtab.js';
import {classes} from './postcreationformtabs.styles.js';
import {usePostCreationTabs} from './postcreationformtabs.hooks.js';


/**
 * Renders the post creation form tabs.
 * @param {Object} props The component props.
 * @param {string} props.activeTab The active tab.
 * @param {Function} props.setActiveTab The active tab setter.
 * @return {JSX.Element} The rendered component.
 */
export function PostCreationFormTabs() {
    const {tabs} = usePostCreationTabs();

    return (
        <div className={classes.postCreationFormTabsDiv}>
            <div className={classes.postCreationFormTabsInnerDiv}>
                {tabs.map((tab) => (<PostCreationFormTab key={tab.title} {...tab}/>))}
            </div>
        </div>
    );
}

PostCreationFormTabs.propTypes = {
    activeTab: PropTypes.string.isRequired,
    setActiveTab: PropTypes.func.isRequired,
};
