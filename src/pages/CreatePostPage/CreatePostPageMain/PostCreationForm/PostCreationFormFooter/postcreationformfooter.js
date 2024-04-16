import React from 'react';
import {ActionButtons} from './ActionButtons/actionbuttons.js';
import {PostTags} from './PostTags/posttags.js';
import {classes} from './postcreationformfooter.styles.js';

/**
 * Renders the post creation form footer.
 * @return {JSX.Element} The rendered component.
 */
export function PostCreationFormFooter() {
    return (
        <div className={classes.postCreationFormFooterDiv} data-testid="post-creation-form-footer-div">
            <PostTags data-testid="post-tags"/>
            <hr className={classes.postCreationFormFooterHr} data-testid="post-creation-form-footer-hr"/>
            <ActionButtons data-testid="action-buttons"/>
        </div>
    );
}

