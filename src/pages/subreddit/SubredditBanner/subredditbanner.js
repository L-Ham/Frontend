import React from 'react';
import {HeaderButtons} from './HeaderButtons/HeaderButton/headerbuttons.js';
import {CreatePostButton} from './CreatePostButton/createpostbutton.js';
import {CommunityStats} from './CommunityStats/communitystats.js';
import {CommunityIcon} from './CommunityIcon/communityicon.js';
import {BannerImage} from './BannerImage/bannerimage.js';
import {useSubredditBanner} from './subredditbanner.hooks.js';
import {classes} from './subredditbanner.styles.js';


/**
 * Renders the subreddit banner.
 * @return {JSX.Element} The rendered component.
 */
export function SubredditBanner() {
    const bannerData = useSubredditBanner();

    if (Object.keys(bannerData).length === 0) return null;

    const {
        bannerBackgroundImage,
        communityIcon,
        displayNamePrefixed,
        activeUserCount,
        subscribersCount,
        primaryColor,
        PlusIcon,
        handleCreatePost,
    } = bannerData;


    return (
        <div className={classes.container} data-testid="subreddit-banner-ws5dsd">
            <BannerImage backgroundImage={bannerBackgroundImage} data-testid="banner-image" />
            <section className={classes.sectionContainer} data-testid="section-container">
                <div className={classes.flexContainer} data-testid="flex-container">
                    <div className={classes.innerFlexContainer} data-testid="inner-flex-container">
                        <CommunityIcon
                            icon={communityIcon}
                            displayNamePrefixed={displayNamePrefixed}
                            primaryColor={primaryColor}
                            data-testid="community-icon"
                        />
                        <CommunityStats
                            displayNamePrefixed={displayNamePrefixed}
                            subscribersCount={subscribersCount}
                            activeUserCount={activeUserCount}
                            data-testid="community-stats"
                        />
                    </div>
                    <div className={classes.buttonsContainer} data-testid="buttons-container">
                        <CreatePostButton handleCreatePost={handleCreatePost}
                            PlusIcon={PlusIcon} data-testid="create-post-button" />
                        <HeaderButtons data-testid="header-buttons" />
                    </div>
                </div>
            </section>
        </div>
    );
}
