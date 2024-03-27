import React from 'react';
import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {DATA, VIEW_CONTEXTS} from '../data.js';
import {SubredditOverlay} from './Overlays/subredditoverlay.js';
import {UserOverlay} from './Overlays/useroverlay.js';
/**
 * HoverCard component
 * @param {string} postId
 * @param {string} fullName
 * @param {string} viewContext
 * @return {React.Component}
 */
export function HoverCard({
    postId,
    fullName,
    viewContext,
}) {
    const {subreddit_id: subredditId, author_fullname: authorId} = DATA[postId];
    let {display_name_prefixed: prefixedName} = DATA[fullName];
    const [overlayOpen, setOverlayOpen] = useState(false);
    const [hoverTimer, setHoverTimer] = useState(null);

    useEffect(() => {
    // Clean up the timer when the component unmounts
        return () => {
            if (hoverTimer) {
                clearTimeout(hoverTimer);
            }
        };
    }, [hoverTimer]);

    // time in ms
    const toOpen = 750;
    const toClose = 350;
    const handlePopoverOpen = () => {
        if (hoverTimer) {
            clearTimeout(hoverTimer);
        }
        if (overlayOpen) return;
        const timer = setTimeout(() => {
            setOverlayOpen(true);
        }, toOpen);
        setHoverTimer(timer);
    };

    const handlePopoverClose = () => {
        const timer = setTimeout(() => {
            setOverlayOpen(false);
        }, toClose);
        setHoverTimer(timer);
    };
    const isUser = fullName[1] === '2';
    const isUserOnCommentPage = viewContext === VIEW_CONTEXTS.COMMENTS_PAGE && isUser;
    if (isUserOnCommentPage) {
        prefixedName = prefixedName.replace('u/', '');
    }

    return (
        <>
            <div className='inline-flex max-w-full items-center gap-1' data-testid={`hovercard-${postId}-${fullName}`}>
                {viewContext !== VIEW_CONTEXTS.COMMENTS_PAGE &&
                <div className='overflow-hidden rounded-full pr-1.5'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="25" height="25"
                        fill='currentColor'>
                        <path d={`M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0ZM8.016 8.633a1.616 `+
                        `1.616 0 0 0-.2.806V13.5H5.931V6.172h1.8v.9h.039a3.009 3.009 0 0 1 1.018-.732 3.45`+
                        ` 3.45 0 0 1 1.449-.284c.246-.003.491.02.732.068.158.024.309.08.444.164l-.759 1.832a2.09`+
                        ` 2.09 0 0 0-1.093-.26c-.33-.01-.658.062-.954.208a1.422 1.422 0 0 0-.591.565Zm2.9 `+
                        `6.918H9.355L14.7 2.633c.426.272.828.58 1.2.922l-4.984 11.996Z`}>
                        </path>
                    </svg>
                </div>}
                <div className="cursor-pointer text-xs font-semibold text-[var(--color-neutral-content)]
                hover:text-[var(--color-a-hover)]"
                style={{font: 'var(--font-button-sm)', whiteSpace: 'nowrap'}}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                >
                    {prefixedName}
                </div>
            </div>
            <div className='absolute size-0'>
                {overlayOpen && (isUser ?
                    <UserOverlay
                        openOverlay={handlePopoverOpen}
                        closeOverlay={handlePopoverClose}
                        authorId={authorId}
                        viewContext={viewContext}
                    /> :
                    <SubredditOverlay
                        openOverlay={handlePopoverOpen}
                        closeOverlay={handlePopoverClose}
                        subredditId={subredditId}
                        viewContext={viewContext}
                    />)}
            </div>
        </>
    );
}

HoverCard.propTypes = {
    postId: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    viewContext: PropTypes.string.isRequired,
};
