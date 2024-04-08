import React from 'react';
import propTypes from 'prop-types';
import {NumberFormatter} from '../../../General/Components/numberformatter';
import {useSubreddit} from '../../../subredditcontext';
import {getIconComponent} from '../../../../../generic components/iconsmap';
import {communityDetailsWidgetClasses as classes} from './communitydetailswidget.styles';
import {SubredditWidget} from '../Widget/subredditwidget';
import {VIEW_CONTEXTS} from '../Widget/viewcontexts';

/**
 * Renders the subreddit info.
 * @param {object} props - The props.
 * @param {string} props.id - The id of the widget.
 * @param {string} props.description - The description of the subreddit.
 * @param {number} props.currentlyViewingCount - The number of users currently viewing the subreddit.
 * @param {number} props.subscribersCount - The number of subscribers to the subreddit.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityDetailsWidget({id, description, currentlyViewingCount, subscribersCount}) {
    const {about} = useSubreddit();

    if (!about | !id | !description | !currentlyViewingCount | !subscribersCount) return null;

    const {title} = about.data;
    const ExternalIcon = getIconComponent('external', false);


    return (
        <SubredditWidget title={title} view={VIEW_CONTEXTS.COMMUNITY_DETAILS}>
            <div>
                <div id="description" className={classes.description}>
                    {description}
                </div>
                {/* <button className={classes.showMoreButton} id="show-more-btn">
                    <span className="flex items-center justify-center">
                        <span className="flex items-center gap-2">
                        Show more
                        </span>
                    </span>
                </button> */}
            </div>
            <div className={classes.statsContainer}>
                <div className={classes.statsItem}>
                    <span>
                        <strong id="subscribers">
                            <NumberFormatter isFormatedNumber={true} number={subscribersCount} isCap={true}/>
                        </strong>
                    </span>
                    <span className={classes.statsText}>
                    Members
                    </span>
                </div>
                <div className={classes.statsItem}>
                    <span>
                        <strong id="online">
                            <NumberFormatter isFormatedNumber={true} number={currentlyViewingCount} isCap={true}/>
                        </strong>
                    </span>
                    <span className={classes.statsText}>
                        <span className={classes.onlineIndicator} />
                        <span>
                        Online
                        </span>
                    </span>
                </div>
                <div className={classes.directoryLink}>
                    <div slot="directoryLink" className={classes.directoryLink}>
                        <strong id="position">Top 1%</strong>
                        <a
                            href="https://www.reddit.com/best/communities/1/#t5_2rfz5/"
                            className={classes.rankLink}
                        >
                        Rank by size{' '}
                            <ExternalIcon className='relative bottom-[-2px] ml-1'/>
                        </a>
                    </div>
                </div>
            </div>
        </SubredditWidget>
    );
}

CommunityDetailsWidget.propTypes = {
    id: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    currentlyViewingCount: propTypes.number.isRequired,
    subscribersCount: propTypes.number.isRequired,
};
