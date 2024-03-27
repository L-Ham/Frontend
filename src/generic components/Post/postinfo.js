import React from 'react';
import PropTypes from 'prop-types';
import {CreditBar} from './creditbar.js';
import {DATA} from './data.js';
/**
 * PostInfo component
 * @param {string} postId
 * @param {string} viewContext
 * @return {React.Component}
 */
export function PostInfo({
    postId,
    viewContext,
}) {
    const {subreddit_id: subredditId} = DATA[postId];
    const {user_is_subscriber: isSubscriber} = DATA[subredditId];
    // const user = 't2_bll4twvt'; // to be retrieved from redux store
    return (
        <div className="flex justify-between px-1 pb-1 text-xs leading-4 md:px-0">
            <div className='flex items-center gap-2 pr-2'>
                <CreditBar
                    postId={postId}
                    viewContext={viewContext}
                />
            </div>
            <div className='flex items-center pl-2'>
                {(!isSubscriber && viewContext === 'AggregateFeed') &&
                <button
                    className="z-10 mx-1 h-[24px] rounded-full bg-[var(--btn-primary-bg)] px-4
                    text-white hover:bg-[var(--btn-primary-bg-hover)]"
                    style={{font: 'var(--font-button-sm)', height: 'var(--size-lg)'}}
                    type='button' data-testid={`join-${postId}`}
                    onClick={(e) => e.stopPropagation()}>
                    Join
                </button>}
                <button
                    className="z-10 rounded-[99px] p-2 text-[var(--btn-color-text)]
                    hover:bg-[var(--btn-color-bg-hover)]"
                    type='button' data-testid={`more-${postId}`}
                    onClick={(e) => e.stopPropagation()}>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d={`M6 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4-2a2 2 0` +
                        ` 1 0 0 4 2 2 0 0 0 0-4Zm6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z`}>
                        </path>
                    </svg>
                </button>
            </div>
        </div>
    );
}

PostInfo.propTypes = {
    postId: PropTypes.string.isRequired,
    viewContext: PropTypes.string.isRequired,
};
