import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {MoreDropdownMenu} from './MoreDropdownMenu';
import {NotificationsDropdownMenu} from './NotificationsDropdownMenu';
import {ReactComponent as NotificationIconFill} from '../../assets/icons/notification-fill.svg';
import {ReactComponent as NotificationFrequentIconFill} from '../../assets/icons/notification-frequent-fill.svg';
import {ReactComponent as NotificationOffIconFill} from '../../assets/icons/notification-off-fill.svg';
import {ReactComponent as PlusIconFill} from '../../assets/icons/plus-fill.svg';
import {ReactComponent as OnlineIcon} from '../../assets/icons/online.svg';
import {ReactComponent as OverflowHorizontalIconOutline} from '../../assets/icons/overflow-horizontal-outline.svg';

const iconComponents = {
    'notification-fill': NotificationIconFill,
    'notification-frequent-fill': NotificationFrequentIconFill,
    'notification-off-fill': NotificationOffIconFill,
};

/**
 * Returns the icon component.
 * @param {string} iconName - The name of the icon
 * @return {JSX.Element} The icon component.
 */
const getIconComponent = (iconName) => {
    if (!iconName) return null;
    const IconComponent = iconComponents[`${iconName}-fill`];
    return IconComponent ? <IconComponent className='h-5' /> : null;
};

/**
 * Renders the subreddit banner.
 * @param {string} props.name - The name of the subreddit.
 * @param {string} props.profilePictureSrc - The source of the profile picture.
 * @param {string} props.coverSrc - The source of the cover image.
 * @param {string} props.membersCount - The number of members in the subreddit.
 * @param {string} props.onlineCount - The number of members online in the subreddit.
 * @return {JSX.Element} The rendered component.
 */
export function SubredditBanner({
    name,
    profilePictureSrc,
    coverSrc,
    membersCount,
    onlineCount,
}) {
    // states
    const [isJoined, setIsJoined] = useState(false);
    const [isNotficationOptionsVisible, setIsNotficationOptionsVisible] = React.useState(false);
    const [isOtherOptionsVisible, setIsOtherOptionsVisible] = React.useState(false);
    const [activeNotification, setActiveNotification] = React.useState('notification');
    const [isMuted, setIsMuted] = React.useState(false);
    const [isFavourite, setIsFavourite] = React.useState(false);

    // constants
    const isNotficationsVisible = isJoined;

    // functions
    /**
     * Handles the click event on the notification button.
     */
    function handleNotificationClick() {
        if (isNotficationOptionsVisible) {
            setIsNotficationOptionsVisible(false);
        } else {
            setIsNotficationOptionsVisible(true);
        }
    }

    /**
     * Handle mute click event.
     */
    function handleMuteClick() {
        if (isMuted) {
            // TODO: handle unmute
            setIsMuted(false);
        } else {
            // TODO: handle mute
            setIsMuted(true);
        }
    }

    /**
     * Handle favourite click event.
     */
    function handleFavouriteClick() {
        if (isFavourite) {
            // TODO: handle remove from favourites
            // adding to favourite automatically joins the subreddit
            setIsFavourite(false);
        } else {
            // TODO: handle add to favourites
            handleJoinClick(true);
            setIsFavourite(true);
        }
    }

    /**
     * Handles the click event on the create post button.
     */
    function handleCreatePost() {
        // TODO: replace with our actual URL
        window.open('https://www.reddit.com/r/OnePiece/submit', '_blank');
    }

    /**
     * Handles the click event on the join button.
     * @param {boolean} forceJoin - Whether to force join the subreddit.
     */
    function handleJoinClick(forceJoin = false) {
        if (forceJoin === true) {
            if (isJoined !== true) {
                setIsJoined(true);
                if (activeNotification !== 'notification') setActiveNotification('notification');
            }
            return;
        }

        if (isJoined) {
            // TODO: handle leave
            setIsJoined(false);
        } else {
            // TODO: handle join
            setIsJoined(true);
            if (activeNotification !== 'notification') setActiveNotification('notification');
        }
    }

    /**
     * Handles the click event on the more button.
     */
    function handleMoreClick() {
        if (isOtherOptionsVisible) {
            setIsOtherOptionsVisible(false);
        } else {
            setIsOtherOptionsVisible(true);
        }
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
        setActiveNotification(item);
    }

    return (
        <div className="my-2 flex h-56 w-full flex-col items-center rounded-lg max-[1024px]:m-0">
            <div className="w-full overflow-hidden rounded-lg bg-[#d3d3d3]">
                <img src={coverSrc ? coverSrc : ''}
                    alt="Subreddit Cover" className='size-full object-cover object-center'/>
            </div>
            <div className="relative bottom-0 flex w-[95%] flex-col items-start justify-start
            lg:bottom-[26%] lg:flex-row lg:items-end lg:justify-between">
                <div className="mt-2 flex flex-row items-center justify-center">
                    <div className="relative -top-2 size-28
                    max-[1024px]:size-12 max-[1024px]:self-end max-[1024px]:border-0">
                        <img src={profilePictureSrc} alt="Subreddit profile picture"
                            className='size-full rounded-[50%] border-[5px] border-solid border-[#181100]'/>
                    </div>
                    <div className="h-full self-end max-[1024px]:mt-4 max-[1024px]:self-center max-[1024px]:text-left">
                        <h1 className="mb-4 ml-2 text-2xl font-bold leading-6 text-white
                        max-[1024px]:m-0 max-[1024px]:mb-1 max-[1024px]:text-[1rem] max-[1024px]:leading-4">
                            {`r/${name}`}
                        </h1>
                        <div className="flex flex-row items-center min-[1024px]:hidden">
                            <span className='mr-2 flex text-[0.5rem] text-[#b08d0e]'>
                                <span className='mr-[3px] scale-110'>{membersCount}</span> members
                            </span>
                            <span className='flex items-center justify-center text-[0.5rem]
                            text-[#b08d0e]'>
                                <OnlineIcon className="relative -bottom-[6px] mr-1 h-5 self-center bg-transparent"/>
                                <span className='mr-[3px] scale-110'>{onlineCount}</span> online
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center max-[1024px]:mb-3">
                    <button className='flex h-11 cursor-pointer flex-row
                    items-center whitespace-nowrap rounded-3xl border-2 border-solid border-[#777777] bg-transparent
                    px-5 py-2 text-white outline-none hover:border-white'
                    onClick={handleCreatePost}>
                        <PlusIconFill className="mr-1 h-5"/>
                        Create a post
                    </button>
                    {isNotficationsVisible && (
                        <button className='ml-2 flex w-[45px]
                        items-center justify-center rounded-[50%] border-2 border-solid border-[#777777] bg-transparent
                         p-2.5 text-white hover:border-white'
                        onClick={handleNotificationClick}
                        style={{position: 'relative'}}>
                            {getIconComponent(activeNotification)}
                            {isNotficationOptionsVisible && <NotificationsDropdownMenu activeItem={activeNotification}
                                onItemClick={handleNotificationItemClick}/>}
                        </button>
                    )}
                    <button className={`${isJoined ?
                        'border-2 border-solid border-[#777777] bg-transparent text-white hover:border-white' :
                        'border-solid border-[#564b27] bg-[#564b27] text-[white] hover:bg-[#857541]'}
                         mx-2 rounded-3xl px-5 py-2`}
                    onClick={handleJoinClick}>
                        {isJoined ? 'Joined' : 'Join'}
                    </button>
                    <button className="flex w-[45px] items-center justify-center
                    rounded-[50%] border-2 border-solid
                    border-[#777777] bg-transparent p-2.5 text-white hover:border-white"
                    onClick={handleMoreClick} style={{position: 'relative'}}>
                        <OverflowHorizontalIconOutline className="h-5"/>
                        {isOtherOptionsVisible && <MoreDropdownMenu name={name}
                            isMuted={isMuted}
                            onMuteClick={handleMuteClick}
                            isFavourite={isFavourite} onFavouriteClick={handleFavouriteClick}/>}
                    </button>
                </div>
            </div>
        </div>
    );
}


SubredditBanner.propTypes = {
    name: PropTypes.string.isRequired,
    profilePictureSrc: PropTypes.string.isRequired,
    coverSrc: PropTypes.string.isRequired,
    membersCount: PropTypes.string.isRequired,
    onlineCount: PropTypes.string.isRequired,
    onCreatePost: PropTypes.func.isRequired,
};
