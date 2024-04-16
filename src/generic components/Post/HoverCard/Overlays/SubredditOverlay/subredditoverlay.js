import React from 'react';
import PropTypes from 'prop-types';
import {TopBar} from './TopBar/topbar.js';
import {Stats} from './Stats/stats.js';
import {Banner} from './Banner/banner.js';
import {overlayClasses} from './subredditoverlay.styles.js';
import {replaceHtmlEntities} from '../../../../utils.js';
import parse from 'html-react-parser';
import {useSubredditOverlay} from './subredditoverlay.hooks.js';
/**
 * SubredditOverlay component
 * @param {function} openOverlay
 * @param {function} closeOverlay
 * @param {string} subredditId
 * @param {string} subredditName
 * @param {string} viewContext
 * @return {React.Component}
 */
export function SubredditOverlay({
    openOverlay,
    closeOverlay,
    subredditId,
    subredditName,
    viewContext,
}) {
    const {
        subredditPrefixedName,
        bannerImage,
        isMember,
        description,
        avatarImage,
        membersCount,
        membersNickname,
        currentlyViewingCount,
        currentlyViewingNickname,
        rootClasses,
    } = useSubredditOverlay({subredditName, viewContext});
    return (
        <div
            className={rootClasses}
            onMouseEnter={openOverlay}
            onMouseLeave={closeOverlay}
            onClick={(e) => e.stopPropagation()}
            data-testid={`subreddit-overlay-${subredditId}`}
        >
            {bannerImage &&
            <Banner
                subredditId={subredditId}
                bannerLink={bannerImage}
            />}
            <TopBar
                subredditId={subredditId}
                subredditPrefixedName={subredditPrefixedName}
                isSubscriber={isMember}
                icon={avatarImage}
            />
            {description &&
            <div className={overlayClasses.description} data-testid={`subreddit-overlay-description-${subredditId}`}>
                {parse(replaceHtmlEntities(description))}
            </div>}
            <hr className={overlayClasses.hr}/>
            <Stats
                subredditId={subredditId}
                membersCount={membersCount}
                membersName={membersNickname}
                onlineCount={currentlyViewingCount}
                onlineName={currentlyViewingNickname}
            />
        </div>
    );
}

SubredditOverlay.propTypes = {
    openOverlay: PropTypes.func.isRequired,
    closeOverlay: PropTypes.func.isRequired,
    subredditId: PropTypes.string.isRequired,
    subredditName: PropTypes.string.isRequired,
    viewContext: PropTypes.string.isRequired,
    /*
    subredditIcon: PropTypes.element.isRequired,
    subredditDescription: PropTypes.string.isRequired,
    subredditMembers: PropTypes.number.isRequired,
    subredditMembersName: PropTypes.string.isRequired,
    subredditOnline: PropTypes.number.isRequired,
    subredditOnlineName: PropTypes.string.isRequired,
     */
};
