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

    if (!bannerData.activeUserCount) return null;

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
        <div className={classes.container}>
            <BannerImage backgroundImage={bannerBackgroundImage} />
            <section className={classes.sectionContainer}>
                <div className={classes.flexContainer}>
                    <div className={classes.innerFlexContainer}>
                        <CommunityIcon
                            icon={communityIcon}
                            displayNamePrefixed={displayNamePrefixed}
                            primaryColor={primaryColor}
                        />
                        <CommunityStats
                            displayNamePrefixed={displayNamePrefixed}
                            subscribersCount={subscribersCount}
                            activeUserCount={activeUserCount}
                        />
                    </div>
                    <div className={classes.buttonsContainer}>
                        <CreatePostButton handleCreatePost={handleCreatePost} PlusIcon={PlusIcon} />
                        <HeaderButtons />
                    </div>
                </div>
            </section>
        </div>
    );
}
