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
import './SubredditBanner.css';

const iconComponents = {
    'notification-fill': NotificationIconFill,
    'notification-frequent-fill': NotificationFrequentIconFill,
    'notification-off-fill': NotificationOffIconFill,
};

/**
 * Returns the icon component for the dropdown menu item.
 * @param {string} iconName - The name of the icon.
 * @return {JSX.Element} The icon component.
 */
const getIconComponent = (iconName) => {
    if (!iconName) return null;
    const IconComponent = iconComponents[`${iconName}-fill`];
    return IconComponent ? <IconComponent className='icon' /> : null;
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
        <div className="subreddit-banner">
            <div className="subreddit-banner__cover">
                <img src={coverSrc} alt="Subreddit Cover" />
            </div>
            <div className="subreddit-banner__info">
                <div className="subreddit-banner__subinfo-container">
                    <div className="subreddit-banner__profile-picture">
                        <img src={profilePictureSrc} alt="Subreddit profile picture" />
                    </div>
                    <div className="subreddit-banner__subinfo">
                        <h1 className="subreddit-banner__title">{`r/${name}`}</h1>
                        <div className="subreddit-banner__status hidden">
                            <span>{`${(membersCount)} members`}</span>
                            <span>
                                <OnlineIcon className="icon no-fill"/>
                                {`${(onlineCount)} online`}</span>
                        </div>
                    </div>
                </div>
                <div className="subreddit-banner__actions">
                    <button className="no-fill" onClick={handleCreatePost}>
                        <PlusIconFill className="icon"/>
                        Create a post
                    </button>
                    {isNotficationsVisible && (
                        <button className='no-fill rounded' onClick={handleNotificationClick}
                            style={{position: 'relative'}}>
                            {getIconComponent(activeNotification)}
                            {isNotficationOptionsVisible && <NotificationsDropdownMenu activeItem={activeNotification}
                                onItemClick={handleNotificationItemClick}/>}
                        </button>
                    )}
                    <button className={`${isJoined ? 'no-fill' : 'fill-color'}`} onClick={handleJoinClick}>
                        {isJoined ? 'Joined' : 'Join'}
                    </button>
                    <button className="no-fill rounded" onClick={handleMoreClick} style={{position: 'relative'}}>
                        <OverflowHorizontalIconOutline className="icon"/>
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
