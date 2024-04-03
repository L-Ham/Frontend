import React from 'react';
import PropTypes from 'prop-types';
import {VIEW_CONTEXTS} from '../data.js';
import {SubredditOverlay} from './Overlays/SubredditOverlay/subredditoverlay.js';
import {UserOverlay} from './Overlays/UserOverlay/useroverlay.js';
import {useHoverCard} from './hovercard.hooks.js';
import {hoverCardClasses, hoverCardStyles} from './hovercard.styles.js';
/**
 * HoverCard component
 * @param {string} postId
 * @param {string} fullName
 * @param {string} viewContext
 * @param {React.Component} icon
 * @return {React.Component}
 */
export function HoverCard({
    postId,
    fullName,
    viewContext,
    icon,
}) {
    const {
        handlePopoverOpen,
        handlePopoverClose,
        DefaultSubredditIcon,
        overlayOpen,
        prefixedName,
        subredditId,
        authorId,
        isUser,
    } = useHoverCard({fullName, postId, viewContext});
    return (
        <>
            <div
                className={hoverCardClasses.root}
                style={hoverCardStyles.root}
                data-testid={`hovercard-${postId}-${fullName}`}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                {viewContext !== VIEW_CONTEXTS.COMMENTS_PAGE &&
                <div className={hoverCardClasses.icon}>
                    {icon ||
                    <DefaultSubredditIcon
                        viewBox="0 0 20 20"
                        width="25"
                        height="25"
                        fill="currentColor"
                    />}
                </div>}
                {prefixedName}
            </div>
            <div className={hoverCardClasses.overlay}>
                {overlayOpen && (isUser ?
                    <UserOverlay
                        openOverlay={handlePopoverOpen}
                        closeOverlay={handlePopoverClose}
                        userId={authorId}
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
    icon: PropTypes.element,
};
