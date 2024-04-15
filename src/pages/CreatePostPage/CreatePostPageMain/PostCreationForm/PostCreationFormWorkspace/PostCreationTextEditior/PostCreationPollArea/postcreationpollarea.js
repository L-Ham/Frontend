import React from 'react';
import {PostCreationPollOptions} from './PostCreationPollOptions/postcreationpolloptions.js';
import {PostCreationpollTips} from './PostCreationPollTips/postcreationpolltips.js';

/**
 * Renders the poll area for the post creation form.
 * @return {JSX.Element} The rendered component.
 */
export function PostCreationPollArea() {
    return (
        <div className="border-solid border-[0px_1px_1px_1px]
        border-[color:var(--newRedditTheme-body)] bg-[var(--newRedditTheme-body)] px-0
        py-[8px]">
            <div data-testid="poll-creator">
                <div className="flex">
                    <PostCreationPollOptions/>
                    <PostCreationpollTips/>
                </div>
            </div>
        </div>
    );
}
