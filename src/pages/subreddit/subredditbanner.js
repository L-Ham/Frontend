import React, {useEffect, useState} from 'react';
// components
import {MoreDropdownMenu} from './moredropdownmenu';
import {NotificationsDropdownMenu} from './notificationsdropdownmenu';
import {Edit} from '../../generic components/edit';
import {CommunityStats} from './communitystats';
import {useSubreddit} from './subredditcontext';
// styles
import styles from './subredditbanner.module.css';
// icons
import {getIconComponent} from '../../generic components/iconsmap';

/**
 * Renders the subreddit banner.
 * @return {JSX.Element} The rendered component.
 */
export function SubredditBanner() {
    // states
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isNotificationLevelsVisible, setIsNotificationLevelsVisible] = React.useState(false);
    const [isOtherOptionsVisible, setIsOtherOptionsVisible] = useState(false);
    const [activeNotificationLevel, setActiveNotificationLevel] = useState(null);
    const [isMuted, setIsMuted] = useState(false);
    const [isFavourite, setIsFavourite] = useState(false);

    // hooks
    const {about} = useSubreddit();

    useEffect(() => {
        if (!about) return;

        const {
            user_is_subscriber: userIsSubscriber,
            user_is_muted: userIsMuted,
            user_has_favourited: userHasFavourited,
            notification_level: notificationLevel,
        } = about.data;

        setIsSubscribed(userIsSubscriber);
        setIsMuted(userIsMuted);
        setIsFavourite(userHasFavourited);
        setActiveNotificationLevel(notificationLevel);
    }, [about]);

    if (!about) return null;

    const {
        data: {
            url,
            banner_background_color: bannerBackgroundColor,
            banner_background_image: bannerBgImg,
            community_icon: comIcon,
            user_is_moderator: userIsModerator,
            display_name_prefixed: displayNamePrefixed,
            active_user_count: currentlyViewingCount,
            subscribers: subscribersCount,
        },
    } = about;


    // constants
    const bannerBackgroundImage = bannerBgImg.split('width')[0];
    const communityIcon = comIcon.split('width')[0];

    // icons
    const PlusIconFill = getIconComponent('plus', true);
    const OverflowHorizontalIconOutline = getIconComponent('overflow-horizontal', false);
    const activeNotificationLevelIconName = activeNotificationLevel ? activeNotificationLevel : 'low';
    const NotificationLevelIcon = getIconComponent(activeNotificationLevelIconName, true);

    // functions
    /**
     * Handles the click event on the notification button.
     */
    function handleNotificationClick() {
        closeAllDropdowns();
        setIsNotificationLevelsVisible(!isNotificationLevelsVisible);
    }

    /**
     * Handle mute click event.
     */
    function handleMuteClick() {
        if (isMuted) {
            // TODO: handle unmute
        } else {
            // TODO: handle mute
        }
        setIsMuted((prevState) => !prevState);
    }

    /**
     * Handle favourite click event.
     */
    function handleFavouriteClick() {
        if (isFavourite) {
            // TODO: handle remove from favourites
            // adding to favourite automatically joins the subreddit
        } else {
            // TODO: handle add to favourites
            handleJoinClick(true);
        }
        setIsFavourite((prevState) => !prevState);
    }

    /**
     * Handles the click event on the create post button.
     */
    function handleCreatePost() {
        // TODO: replace with our actual URL
        window.open(`https://www.reddit.com${url}submit`, '_blank');
    }

    /**
     * Handles the click event on the join button.
     * @param {boolean} forceJoin - Whether to force join the subreddit.
     */
    function handleJoinClick(forceJoin = false) {
        if (forceJoin === true) {
            if (isSubscribed !== true) {
                setIsSubscribed(true);
                if (activeNotificationLevel !== 'low') setActiveNotificationLevel('low');
            }
            return;
        }

        if (isSubscribed) {
            // TODO: handle leave
        } else {
            // TODO: handle join
            if (activeNotificationLevel !== 'low') setActiveNotificationLevel('low');
        }
        setIsSubscribed((prevState) => !prevState);
    }


    /**
     * Handles the click event on the mod tools button.
     * @return {void}
     * */
    function handleModToolsClick() {
        window.open(`https://www.reddit.com${url}about/modqueue`, '_blank');
    }

    /**
     * Handles the click event on the more button.
     */
    function handleMoreClick() {
        closeAllDropdowns();
        setIsOtherOptionsVisible(!isOtherOptionsVisible);
    }

    /**
     * Handles the click event on the more button.
     */
    /**
     * Handles the click event on the notification item.
     * @param {string} item - The selected notification item.
     */
    function handleNotificationItemClick(item) {
        // TODO: send notification state to server
        setActiveNotificationLevel(item);
    }

    /**
     * Closes all dropdowns.
     * @return {void}
     * */
    function closeAllDropdowns() {
        if (isNotificationLevelsVisible) setIsNotificationLevelsVisible(false);
        if (isOtherOptionsVisible) setIsOtherOptionsVisible(false);
    }

    return (
        <div className={styles.banner} >
            <div className="h-[130px] w-full overflow-hidden rounded-lg"
                style={{backgroundColor: bannerBackgroundColor}}>
                {userIsModerator && <Edit />}
                <img src={bannerBackgroundImage ? bannerBackgroundImage : ''}
                    alt="Subreddit Cover" className='size-full object-cover object-center'/>
            </div>
            <div className="absolute bottom-0 flex  w-[95%] flex-col items-start justify-start
            max-[1120px]:static lg:flex-row lg:items-end lg:justify-between">
                <div className="mt-2 flex flex-row items-center justify-center">
                    <div className="relative -top-0 size-[80px]
                    max-[1120px]:size-12 max-[1120px]:self-end max-[1120px]:border-0">
                        <img src={communityIcon ? communityIcon : ''} alt="Subreddit profile picture"
                            className='size-full rounded-[50%] border-[5px] border-solid
                         max-[1120px]:mr-2 '
                            style={{borderColor: '#fefaf2'}}/>
                    </div>
                    <div className="h-full self-end max-[1120px]:mt-4 max-[1120px]:self-center max-[1120px]:text-left">
                        <h1 className="mb-4 ml-2 text-2xl font-bold leading-6
                        text-black max-[1120px]:m-0 max-[1120px]:mb-1 max-[1120px]:text-[1rem]
                         max-[1120px]:leading-4">
                            {displayNamePrefixed}
                        </h1>
                        <div className="flex flex-row items-center min-[1024px]:hidden">
                            <CommunityStats currentlyViewingCount={currentlyViewingCount}
                                subscribersCount={subscribersCount} isSmallView={true}/>
                        </div>
                    </div>
                </div>
                {/* action buttons*/}
                <div className="flex flex-row items-center">
                    <button className={styles.outlineBtn}
                        onClick={handleCreatePost}>
                        <PlusIconFill className="mr-1 h-5 fill-inherit"/>
                        <span>
                       Create a post
                        </span>
                    </button>
                    {isSubscribed && (
                        <button className={`${styles.outlineBtn} ${styles.roundedBtn} relative`}
                            onClick={handleNotificationClick}>
                            {<NotificationLevelIcon/>}
                            {isNotificationLevelsVisible &&
                            <NotificationsDropdownMenu className='-bottom-[122px]' activeItem={activeNotificationLevel}
                                onItemClick={handleNotificationItemClick}/>}
                        </button>
                    )}
                    {
                        !userIsModerator && (
                            <button className={`${isSubscribed ? `${styles.outlineBtn}` : `${styles.joinBtn}`}`}
                                style={{color: !isSubscribed ? 'white' : 'black'}}
                                onClick={handleJoinClick}>
                                {isSubscribed ? 'Joined' : 'Join'}
                            </button>
                        )
                    }
                    {userIsModerator && (
                        <button className='joinBtn'
                            style={{color: !isSubscribed ? 'white' : 'black'}}
                            onClick={handleModToolsClick}>
                            Mod Tools
                        </button>
                    )}
                    <button className={`${styles.roundedBtn} ${styles.outlineBtn} relative`}
                        onClick={handleMoreClick}>
                        <OverflowHorizontalIconOutline />
                        {isOtherOptionsVisible && <MoreDropdownMenu
                            isMuted={isMuted}
                            onMuteClick={handleMuteClick}
                            isFavourite={isFavourite} onFavouriteClick={handleFavouriteClick}/>}
                    </button>
                </div>
            </div>
        </div>
    );
}


