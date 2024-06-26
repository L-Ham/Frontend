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
 * @param {number} props.membersCount - The number of subscribers to the subreddit.
  * @param {boolean} props.isCustomizable - The flag to check if the widget is customizable.
 * @param {function} props.onEditClick - The function to call when the edit button is clicked.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityDetailsWidget({description, currentlyViewingCount, membersCount: subscribersCount,
    isCustomizable=false, onEditClick=null}) {
    const {about} = useSubreddit();

    if (about === undefined) return null;

    const {communityDetails: {name: title}} = about;
    const ExternalIcon = getIconComponent('external', false);


    return (
        <SubredditWidget title={title} view={VIEW_CONTEXTS.COMMUNITY_DETAILS} data-testid="subreddit-widget"
            isCustomizable={isCustomizable}
            onEditClick={onEditClick}>
            <DescriptionSection description={description} data-testid="description-section" />
            <div className={classes.statsContainer} data-testid="stats-container">
                <StatsItem count={subscribersCount} label="Members" isCap={true} data-testid="stats-item" />
                <OnlineIndicator count={currentlyViewingCount} data-testid="online-indicator" />
                <DirectoryLink ExternalIcon={ExternalIcon} data-testid="directory-link" />
            </div>
        </SubredditWidget>
    );
}

CommunityDetailsWidget.propTypes = {
    description: propTypes.string.isRequired,
    currentlyViewingCount: propTypes.number.isRequired,
    membersCount: propTypes.number.isRequired,
    isCustomizable: propTypes.bool,
    onEditClick: propTypes.func,
};
