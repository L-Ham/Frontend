import React from 'react';
import {NumberFormatter} from '../../General/Components/numberformatter.js';
import {HeaderButtons} from '../HeaderButtons/HeaderButton/headerbuttons.js';
import {useSubredditBanner} from './subredditbanner.hooks';
import {buttonClasses} from '../../subreddit.styles.js';
import {classes} from './subredditbanner.styles';

/**
 * Renders the subreddit banner.
 * @return {JSX.Element} The rendered component.
 */
export function SubredditBanner() {
    const bannerData = useSubredditBanner();

    if (!bannerData.primaryColor) return null;

    const {
        bannerBackgroundImage,
        communityIcon,
        displayNamePrefixed,
        activeUserCount,
        subscribersCount,
        primaryColor,
        PlusIcon,
        handleCreatePost} = bannerData;

    return (
        <div className={classes.container}>
            <div style={{containerType: 'inline-size'}}>
                <div
                    className={classes.bannerContainer}
                    style={{
                        backgroundImage: `url("${bannerBackgroundImage}")`,
                    }}
                />
            </div>
            <section
                className={classes.sectionContainer}
            >
                <div className={classes.flexContainer}>
                    <div className={classes.innerFlexContainer}>
                        <div className={classes.communityIconOuterContainer}>
                            <div className={classes.communityIconContainer}>
                                <div>
                                    <img
                                        src={communityIcon}
                                        alt={`${displayNamePrefixed} icon`}
                                        loading="lazy"
                                        style={{color: primaryColor, backgroundColor: primaryColor}}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className={classes.communityTitle}>
                                {displayNamePrefixed}
                            </h1>
                            <div className={classes.communityStats}>
                                <span className={classes.communityStatsText}>
                                    <NumberFormatter number={subscribersCount} isFormatedNumber={true} isCap={false}/>
                                    members
                                </span>
                                <div className={classes.communityStatsOnline}>
                                    <span className={classes.communityStatsOnlineIndicator} />
                                    <span className={classes.communityStatsOnlineText}>
                                        <NumberFormatter number={activeUserCount}
                                            isFormatedNumber={true} isCap={true}/>
                                        online
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.createPostButtonContainer}>
                        <span className={classes.createPostButton}>
                            <a
                                className={`${buttonClasses.createPostButton}`}
                                onClick={handleCreatePost}
                            >
                                <span className="flex items-center justify-center">
                                    <span className="mr-2 flex h-full">
                                        <PlusIcon/>
                                    </span>
                                    <span className="flex h-full items-center gap-2">Create a post</span>
                                </span>
                            </a>
                        </span>
                        <HeaderButtons></HeaderButtons>
                    </div>
                </div>
            </section>
        </div>
    );
}
