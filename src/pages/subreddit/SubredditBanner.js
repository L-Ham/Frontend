import React, {useEffect, useState} from 'react';
import {MoreDropdownMenu} from './MoreDropdownMenu';
import {NotificationsDropdownMenu} from './NotificationsDropdownMenu';
import {getIconComponent} from '../../generic components/iconsMap';
import {Edit} from '../../generic components/Edit';
import {CommunityStats} from './CommunityStats';
import {useSubreddit} from './subredditContext';
import styles from './SubredditBanner.module.css';

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

    const {about} = useSubreddit();

    useEffect(() => {
        if (!about) return;

        const {
            user_is_subscriber: userIsSubscriber,
            user_is_muted: userIsMuted,
            user_has_favourited: userHasFavourited,
            notification_level: notificationLevel,
        } = about.data;

        setIsSubscribed(!!userIsSubscriber);
        setIsMuted(!!userIsMuted);
        setIsFavourite(!!userHasFavourited);
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
    const bannerBackgroundImage = bannerBgImg.split('?')[0];
    const communityIcon = comIcon.split('?')[0];

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
        setIsNotificationLevelsVisible((prevState) => !prevState);
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
        setIsOtherOptionsVisible((prevState) => !prevState);
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

    return (
        <div className={`${styles.banner} flex flex-col`} >
            <div className="relative w-full flex-1 overflow-hidden rounded-lg"
                style={{backgroundColor: bannerBackgroundColor}}>
                {userIsModerator && <Edit />}
                <img src={bannerBackgroundImage ? bannerBackgroundImage : ''}
                    alt="Subreddit Cover" className='size-full object-cover object-center'/>
            </div>
            <div className="relative bottom-0 flex w-[95%] flex-col items-start justify-start
            lg:bottom-[26%] lg:flex-row lg:items-end lg:justify-between">
                <div className="mt-2 flex flex-row items-center justify-center">
                    <div className="relative -top-2 size-28
                    max-[1024px]:size-12 max-[1024px]:self-end max-[1024px]:border-0">
                        <img src={communityIcon ? communityIcon : ''} alt="Subreddit profile picture"
                            className='size-full rounded-[50%] border-[5px] border-solid
                         max-[1024px]:mr-2 '
                            style={{borderColor: 'var(--backgroundColor)'}}/>
                    </div>
                    <div className="h-full self-end max-[1024px]:mt-4 max-[1024px]:self-center max-[1024px]:text-left">
                        <h1 className="mb-4 ml-2 text-2xl font-bold leading-6
                        max-[1024px]:m-0 max-[1024px]:mb-1 max-[1024px]:text-[1rem] max-[1024px]:leading-4">
                            {displayNamePrefixed}
                        </h1>
                        <div className="flex flex-row items-center min-[1024px]:hidden">
                            <CommunityStats currentlyViewingCount={currentlyViewingCount}
                                subscribersCount={subscribersCount}/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center max-[1024px]:mb-3">
                    <button className={styles.outline}
                        onClick={handleCreatePost}>
                        <PlusIconFill className="mr-1 h-5" style={{fill: 'black'}}/>
                        Create a post
                    </button>
                    {isSubscribed && (
                        <button className={`${styles.outline} rounded-2xl`}
                            onClick={handleNotificationClick}
                            style={{position: 'relative'}}>
                            {<NotificationLevelIcon/>}
                            {isNotificationLevelsVisible &&
                            <NotificationsDropdownMenu activeItem={activeNotificationLevel}
                                onItemClick={handleNotificationItemClick}/>}
                        </button>
                    )}
                    {
                        !userIsModerator && (
                            <button className={`${isSubscribed ?
                                'border-2 border-solid bg-transparent' :
                                'border-solid'}
                                 mx-2 rounded-3xl px-5 py-2`}
                            style={{border: 'var(--keyColor)', backgroundColor: 'var(--keyColor)',
                                color: 'white'}}
                            onClick={handleJoinClick}>
                                {isSubscribed ? 'Joined' : 'Join'}
                            </button>
                        )
                    }
                    {userIsModerator && (
                        <button className={`border-solid
                         mx-2 rounded-3xl px-5 py-2`}
                        style={{border: 'var(--keyColor)', backgroundColor: 'var(--keyColor)'}}
                        onClick={handleModToolsClick}>
                            Mod Tools
                        </button>
                    )}
                    <button className="flex w-[45px] items-center justify-center
                    rounded-[50%] border-2 border-solid
                     bg-transparent p-2.5"
                    onClick={handleMoreClick} style={{position: 'relative', borderColor: 'var(--primaryTextColor)'}}>
                        <OverflowHorizontalIconOutline className="h-5"/>
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


