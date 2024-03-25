import React, {useEffect, useState} from 'react';
import {MoreDropdownMenu} from './MoreDropdownMenu';
import {NotificationsDropdownMenu} from './NotificationsDropdownMenu';
import {getIconComponent} from '../../generic components/iconsMap';
import {Edit} from '../../generic components/Edit';
import {useSubreddit} from './subredditContext';

/**
 * Renders the subreddit banner.
 * @return {JSX.Element} The rendered component.
 */
export function SubredditBanner() {
    const {
        subredditAbout,
    } = useSubreddit();

    const {
        url,
        banner_background_color: bannerBackgroundColor,
        banner_background_image: bannerBackgroundImage,
        primary_color: primaryColor,
        community_icon: communityIcon,
        user_is_moderator: userIsModerator,
        user_is_subscriber: userIsSubscriber,
        user_is_muted: userIsMuted,
        user_has_favourited: userHasFavourited,
        display_name_prefixed: displayNamePrefixed,
        notification_level: notificationLevel,
        active_user_count: activeUserCount,
        subscribers: subscribersCount,
    } = subredditAbout.data;

    // states
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isNotificationLevelsVisible, setIsNotificationLevelsVisible] = React.useState(false);
    const [isOtherOptionsVisible, setIsOtherOptionsVisible] = React.useState(false);
    const [activeNotificationLevel, setActiveNotificationLevel] = React.useState(null);
    const [isMuted, setIsMuted] = React.useState(false);
    const [isFavourited, setIsFavourited] = React.useState(false);

    // constants
    const activeUserCountNickname = 'members';
    const subscribersNickname = 'online';

    // icons
    const OnlineIcon = getIconComponent('online', true);
    const PlusIconFill = getIconComponent('plus', true);
    const OverflowHorizontalIconOutline = getIconComponent('overflow-horizontal', false);
    const activeNotificationLevelIconName = activeNotificationLevel ? activeNotificationLevel : 'low';
    const NotificationLevelIcon = getIconComponent(activeNotificationLevelIconName, true);


    useEffect(() => {
        setIsSubscribed(userIsSubscriber);
        setIsMuted(userIsMuted);
        setIsFavourited(userHasFavourited);
        setActiveNotificationLevel(notificationLevel);
    }, [userIsSubscriber, userIsMuted, userHasFavourited, notificationLevel]);

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
        if (isFavourited) {
            // TODO: handle remove from favourites
            // adding to favourite automatically joins the subreddit
        } else {
            // TODO: handle add to favourites
            handleJoinClick(true);
        }
        setIsFavourited((prevState) => !prevState);
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
                if (activeNotificationLevel !== 'Low') setActiveNotificationLevel('Low');
            }
            return;
        }

        if (isSubscribed) {
            // TODO: handle leave
        } else {
            // TODO: handle join
            if (activeNotificationLevel !== 'Low') setActiveNotificationLevel('Low');
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
        <div className="mb-2 flex h-56 w-full flex-col items-center rounded-lg max-[1024px]:m-0">
            <div className="relative size-full overflow-hidden rounded-lg"
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
                        <img src={communityIcon} alt="Subreddit profile picture"
                            className='size-full rounded-[50%] border-[5px] border-solid
                            border-[#ffeef6]  max-[1024px]:mr-2 max-[1024px]:border-transparent'/>
                    </div>
                    <div className="h-full self-end max-[1024px]:mt-4 max-[1024px]:self-center max-[1024px]:text-left">
                        <h1 className="mb-4 ml-2 text-2xl font-bold leading-6
                        max-[1024px]:m-0 max-[1024px]:mb-1 max-[1024px]:text-[1rem] max-[1024px]:leading-4">
                            {displayNamePrefixed}
                        </h1>
                        <div className="flex flex-row items-center min-[1024px]:hidden">
                            <span className='mr-2 flex text-[0.5rem] text-[#b08d0e]'>
                                <span className='mr-[3px] scale-110'>{subscribersCount}</span> {activeUserCountNickname}
                            </span>
                            <span className='flex items-center justify-center text-[0.5rem]
                            text-[#b08d0e]'>
                                <OnlineIcon className="relative -bottom-[6px] mr-1 h-5 self-center bg-transparent"/>
                                <span className='mr-[3px] scale-110'>{activeUserCount}</span>
                                {subscribersNickname}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center max-[1024px]:mb-3">
                    <button className='flex h-11 cursor-pointer flex-row
                    items-center whitespace-nowrap rounded-3xl border-2 border-solid border-[#777777] bg-transparent
                    px-5 py-2  outline-none hover:border-black'
                    onClick={handleCreatePost}>
                        <PlusIconFill className="mr-1 h-5"/>
                        Create a post
                    </button>
                    {isSubscribed && (
                        <button className='ml-2 flex w-[45px]
                        items-center justify-center rounded-[50%] border-2 border-solid border-[#777777] bg-transparent
                         p-2.5  hover:border-black'
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
                                'border-2 border-solid bg-transparent  hover:border-black' :
                                'border-solid text-[white] hover:bg-[#857541]'}
                                 mx-2 rounded-3xl px-5 py-2`}
                            style={{border: primaryColor, backgroundColor: primaryColor}}
                            onClick={handleJoinClick}>
                                {isSubscribed ? 'Joined' : 'Join'}
                            </button>
                        )
                    }
                    {userIsModerator && (
                        <button className={`border-solid text-[white] hover:bg-[#857541]
                         mx-2 rounded-3xl px-5 py-2`}
                        style={{border: primaryColor, backgroundColor: primaryColor}}
                        onClick={handleModToolsClick}>
                            Mod Tools
                        </button>
                    )}
                    <button className="flex w-[45px] items-center justify-center
                    rounded-[50%] border-2 border-solid
                    border-[#777777] bg-transparent p-2.5  hover:border-black"
                    onClick={handleMoreClick} style={{position: 'relative'}}>
                        <OverflowHorizontalIconOutline className="h-5"/>
                        {isOtherOptionsVisible && <MoreDropdownMenu
                            isMuted={isMuted}
                            onMuteClick={handleMuteClick}
                            isFavourited={isFavourited} onFavouriteClick={handleFavouriteClick}/>}
                    </button>
                </div>
            </div>
        </div>
    );
}


