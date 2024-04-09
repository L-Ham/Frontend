import React from 'react';
import propTypes from 'prop-types';
import {DescriptionSection} from './DescriptionSection/descriptionsection.js';
import {StatsItem} from './StatsItem/statsitem.js';
import {OnlineIndicator} from './OnlineIndicator/onlineindicator.js';
import {DirectoryLink} from './DirectoryLink/directorylink.js';
import {useSubreddit} from '../../../subredditcontext.js';
import {getIconComponent} from '../../../../../generic components/iconsmap.js';
import {communityDetailsWidgetClasses as classes} from './communitydetailswidget.styles.js';
import {SubredditWidget} from '../Widget/subredditwidget.js';
import {VIEW_CONTEXTS} from '../Widget/viewcontexts.js';

/**
 * Renders the subreddit info.
 * @param {object} props - The props.
 * @param {string} props.description - The description of the subreddit.
 * @param {number} props.currentlyViewingCount - The number of users currently viewing the subreddit.
 * @param {number} props.subscribersCount - The number of subscribers to the subreddit.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityDetailsWidget({description, currentlyViewingCount, subscribersCount}) {
    const {about} = useSubreddit();

    if (!about || !description || !currentlyViewingCount || !subscribersCount) return null;

    const {title} = about.data;
    const ExternalIcon = getIconComponent('external', false);


    return (
        <SubredditWidget title={title} view={VIEW_CONTEXTS.COMMUNITY_DETAILS}>
            <DescriptionSection description={description} />
            <div className={classes.statsContainer}>
                <StatsItem count={subscribersCount} label="Members" isCap={true} />
                <OnlineIndicator count={currentlyViewingCount} />
                <DirectoryLink ExternalIcon={ExternalIcon} />
            </div>
        </SubredditWidget>
    );
}

CommunityDetailsWidget.propTypes = {
    description: propTypes.string.isRequired,
    currentlyViewingCount: propTypes.number.isRequired,
    subscribersCount: propTypes.number.isRequired,
};
