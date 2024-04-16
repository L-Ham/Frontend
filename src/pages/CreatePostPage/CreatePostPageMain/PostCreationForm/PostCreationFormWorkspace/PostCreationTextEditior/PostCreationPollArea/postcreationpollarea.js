import React from 'react';
import {PostCreationPollOptions} from './PostCreationPollOptions/postcreationpolloptions.js';
import {PostCreationpollTips} from './PostCreationPollTips/postcreationpolltips.js';
import {classes} from './postcreationpollarea.styles.js';

/**
 * Renders the poll area for the post creation form.
 * @return {JSX.Element} The rendered component.
 */
export function PostCreationPollArea() {
    return (
        <div className={classes.postCreationPollAreaDiv}>
            <div data-testid="poll-creator">
                <div className={classes.postCreationPollAreaInnerDiv}>
                    <PostCreationPollOptions/>
                    <PostCreationpollTips/>
                </div>
            </div>
        </div>
    );
}
