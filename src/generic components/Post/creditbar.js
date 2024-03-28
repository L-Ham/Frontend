import React from 'react';
import PropTypes from 'prop-types';
import {DATA} from './data.js';
import {HoverCard} from './HoverCard/hovercard.js';
import ReactTimeAgo from 'react-time-ago';
import {VIEW_CONTEXTS} from './data.js';
/**
 * CreditBar component
 * @param {string} postId
 * @param {string} viewContext
 * @return {React.Component}
 */
export function CreditBar({
    postId,
    viewContext,
}) {
    // const [expanded, setExpanded] = React.useState(false);
    const {created, subreddit_id: subredditId, author_fullname: authorId} = DATA[postId];
    const {display_name_prefixed: subredditPrefixedName} = DATA[subredditId];
    const classNames = viewContext === VIEW_CONTEXTS.COMMENTS_PAGE ?
        'relative flex min-w-0 flex-nowrap items-center gap-2 text-xs leading-4 text-[#014980] pt-4' :
        'relative flex min-w-0 flex-wrap items-center gap-1 text-xs leading-4 text-[#014980] pt-1';
    return (
        <div className={classNames}>
            {viewContext === VIEW_CONTEXTS.COMMENTS_PAGE &&
            <button
                aria-label="Back"
                className="hidden size-10 items-center justify-center rounded-full bg-[var(--btn-color-bg)]
                px-2 text-[var(--btn-color-text)] hover:bg-[var(--btn-color-bg-hover)] md:inline-flex"
                type="button"
                onClick={(e) => {
                    e.stopPropagation; history.back();
                }}
                data-testid={`back-${postId}`}
            >
                <span className="flex items-center justify-center">
                    <span className="flex">
                        <svg
                            fill="currentColor"
                            height="20"
                            viewBox="0 0 20 20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d={`M19 9.375H2.51l7.932-7.933-.884-.884-9 9a.625.625 0 0 0 0 .884l9 9 .884-.884-` +
                            `7.933-7.933H19v-1.25Z`}/>
                        </svg>
                    </span>
                </span>
            </button>}
            <div className="flex items-center gap-1"
                onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = 'https://www.reddit.com/' + subredditPrefixedName;
                }}>
                {viewContext === VIEW_CONTEXTS.COMMENTS_PAGE &&
                <div className='overflow-hidden rounded-full pr-1.5' data-testid={`subreddit-${postId}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="32" height="32"
                        fill='currentColor'>
                        <path d={`M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0ZM8.016 8.633a1.616 `+
                    `1.616 0 0 0-.2.806V13.5H5.931V6.172h1.8v.9h.039a3.009 3.009 0 0 1 1.018-.732 3.45`+
                    ` 3.45 0 0 1 1.449-.284c.246-.003.491.02.732.068.158.024.309.08.444.164l-.759 1.832a2.09`+
                    ` 2.09 0 0 0-1.093-.26c-.33-.01-.658.062-.954.208a1.422 1.422 0 0 0-.591.565Zm2.9 `+
                    `6.918H9.355L14.7 2.633c.426.272.828.58 1.2.922l-4.984 11.996Z`}>
                        </path>
                    </svg>
                </div>
                }
                <div className='flex flex-col gap-0 truncate pr-2'>
                    <div className='flex flex-none flex-row flex-nowrap items-center gap-1'>
                        <HoverCard postId={postId} viewContext={viewContext} fullName={subredditId}/>
                        <div className='text-ellipsis text-[var(--color-neutral-content-weak)]'>
                            <div className="my-0 ml-1 inline-block">•</div>
                            <ReactTimeAgo date={new Date(created * 1000)} locale="en-US" className='ml-1' />
                        </div>
                    </div>
                    {viewContext === VIEW_CONTEXTS.COMMENTS_PAGE &&
                    <div className='flex flex-none flex-row flex-nowrap items-center gap-1'>
                        <HoverCard postId={postId} viewContext={viewContext} fullName={authorId}/>
                    </div>}
                </div>
            </div>
        </div>
    );
}

CreditBar.propTypes = {
    postId: PropTypes.string.isRequired,
    viewContext: PropTypes.string.isRequired,
};
