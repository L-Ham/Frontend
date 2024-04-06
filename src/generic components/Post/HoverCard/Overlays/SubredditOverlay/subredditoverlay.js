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
 * @param {string} viewContext
 * @return {React.Component}
 */
export function SubredditOverlay({
    openOverlay,
    closeOverlay,
    subredditId,
    viewContext,
    /*
    subredditIcon,
    subredditDescription,
    subredditMembers,
    subredditMembersName,
    subredditOnline,
    subredditOnlineName,
     */
}) {
    const {
        subredditPrefixedName,
        publicDescription,
        membersCount,
        membersName,
        onlineCount,
        onlineName,
        isSubscriber,
        bannerLink,
        rootClasses,
    } = useSubredditOverlay({subredditId, viewContext});
    return (
        <div
            className={rootClasses}
            onMouseEnter={openOverlay}
            onMouseLeave={closeOverlay}
            onClick={(e) => e.stopPropagation()}
            data-testid={`subreddit-overlay-${subredditId}`}
        >
            {bannerLink &&
            <Banner
                subredditId={subredditId}
                bannerLink={bannerLink}
            />}
            <TopBar
                subredditId={subredditId}
                subredditPrefixedName={subredditPrefixedName}
                isSubscriber={isSubscriber}
            />
            <div className={overlayClasses.description} data-testid={`subreddit-overlay-description-${subredditId}`}>
                {parse(replaceHtmlEntities(publicDescription))}
            </div>
            <hr className={overlayClasses.hr}/>
            <Stats
                subredditId={subredditId}
                membersCount={membersCount}
                membersName={membersName}
                onlineCount={onlineCount}
                onlineName={onlineName}
            />
        </div>
    );
}

SubredditOverlay.propTypes = {
    openOverlay: PropTypes.func.isRequired,
    closeOverlay: PropTypes.func.isRequired,
    subredditId: PropTypes.string.isRequired,
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
