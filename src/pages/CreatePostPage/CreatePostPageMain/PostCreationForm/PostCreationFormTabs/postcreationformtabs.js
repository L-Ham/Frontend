import React from 'react';
import {PostCreationFormTab} from './PostCreationFormTab/postcreationformtab.js';
import {classes} from './postcreationformtabs.styles.js';
import {usePostCreationTabs} from './postcreationformtabs.hooks.js';


/**
 * Renders the post creation form tabs.
 * @return {JSX.Element} The rendered component.
 */
export function PostCreationFormTabs() {
    const {tabs} = usePostCreationTabs();

    return (
        <div className={classes.postCreationFormTabsDiv} data-testid="post-creation-form-tabs-div">
            <div className={classes.postCreationFormTabsInnerDiv} data-testid="post-creation-form-tabs-inner-div">
                {tabs.map((tab, index) => (
                    <PostCreationFormTab key={tab.title} {...tab} data-testid={`post-creation-form-tab-${index}`} />
                ))}
            </div>
        </div>
    );
}

