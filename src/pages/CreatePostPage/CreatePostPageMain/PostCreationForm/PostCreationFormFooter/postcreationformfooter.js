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
        <div className={classes.postCreationFormFooterDiv}>
            <PostTags/>
            <hr className={classes.postCreationFormFooterHr}/>
            <ActionButtons/>
        </div>
    );
}

