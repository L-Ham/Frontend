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
 * @param {string} entityName
 * @param {string} viewContext
 * @param {React.Component} icon
 * @param {boolean} isUser
 * @return {React.Component}
 */
export function HoverCard({
    postId,
    entityName,
    entityId,
    viewContext,
    isUser,
}) {
    const {
        handlePopoverOpen,
        handlePopoverClose,
        DisplayIcon,
        overlayOpen,
        prefixedName,
    } = useHoverCard({entityName, entityId, viewContext, isUser});
    return (
        <>
            <div
                className={hoverCardClasses.root}
                style={hoverCardStyles.root}
                data-testid={`hovercard-${postId}-${name}`}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                {viewContext !== VIEW_CONTEXTS.COMMENTS_PAGE &&
                <div className={hoverCardClasses.icon}>
                    {DisplayIcon}
                </div>}
                {prefixedName}
            </div>
            <div className={hoverCardClasses.overlay}>
                {overlayOpen && (isUser ?
                    <UserOverlay
                        openOverlay={handlePopoverOpen}
                        closeOverlay={handlePopoverClose}
                        userId={entityId}
                        viewContext={viewContext}
                    /> :
                    <SubredditOverlay
                        openOverlay={handlePopoverOpen}
                        closeOverlay={handlePopoverClose}
                        subredditId={entityId}
                        subredditName={entityName}
                        viewContext={viewContext}
                    />)}
            </div>
        </>
    );
}

HoverCard.propTypes = {
    postId: PropTypes.string.isRequired,
    entityName: PropTypes.string,
    viewContext: PropTypes.string.isRequired,
    isUser: PropTypes.bool.isRequired,
    entityId: PropTypes.string.isRequired,
};
