import React from 'react';
import PropTypes from 'prop-types';
import {VIEW_CONTEXTS} from '../data.js';
import {SubredditOverlay} from './Overlays/SubredditOverlay/subredditoverlay.js';
import {UserOverlay} from './Overlays/UserOverlay/useroverlay.js';
import {useHoverCard} from './hovercard.hooks.js';
import {hoverCardClasses, hoverCardStyles} from './hovercard.styles.js';
import {NavLink} from 'react-router-dom';
/**
 * HoverCard component
 * @param {string} postId
 * @param {object} entityData
 * @param {string} viewContext
 * @param {boolean} isUser
 * @return {React.Component}
 */
export function HoverCard({
    postId,
    entityData,
    viewContext,
    isUser,
}) {
    const {
        handlePopoverOpen,
        handlePopoverClose,
        url,
        DisplayIcon,
        overlayOpen,
        prefixedName,
        entityId,
    } = useHoverCard({entityData, viewContext, isUser});
    return (
        <>
            <div
                className={hoverCardClasses.root}
                style={hoverCardStyles.root}
                data-testid={`hovercard-${postId}-${entityId}`}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                {viewContext !== VIEW_CONTEXTS.COMMENTS_PAGE &&
                <div className={hoverCardClasses.icon} data-testid={`displayicon-${postId}-${entityId}`}>
                    {DisplayIcon}
                </div>}
                <NavLink href={url} >
                    {prefixedName}
                </NavLink>
            </div>
            <div className={hoverCardClasses.overlay} data-testid={`overlay-${postId}-${entityId}`}>
                {overlayOpen && (isUser ?
                    <UserOverlay
                        openOverlay={handlePopoverOpen}
                        closeOverlay={handlePopoverClose}
                        userData={entityData}
                        viewContext={viewContext}
                    /> :
                    <SubredditOverlay
                        openOverlay={handlePopoverOpen}
                        closeOverlay={handlePopoverClose}
                        subredditData={entityData}
                        viewContext={viewContext}
                    />)}
            </div>
        </>
    );
}

HoverCard.propTypes = {
    postId: PropTypes.string.isRequired,
    entityData: PropTypes.object.isRequired,
    viewContext: PropTypes.string.isRequired,
    isUser: PropTypes.bool.isRequired,
};
