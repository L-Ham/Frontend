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
        <div className={classes.postCreationPollAreaDiv} data-testid="post-creation-poll-area-div">
            <div data-testid="poll-creator">
                <div className={classes.postCreationPollAreaInnerDiv} data-testid="post-creation-poll-area-inner-div">
                    <PostCreationPollOptions data-testid="post-creation-poll-options"/>
                    <PostCreationpollTips data-testid="post-creation-poll-tips"/>
                </div>
            </div>
        </div>
    );
}
