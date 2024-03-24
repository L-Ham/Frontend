import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {MoreDropdownMenu} from './MoreDropdownMenu';
import {NotificationsDropdownMenu} from './NotificationsDropdownMenu';
import {getIconComponent} from '../../generic components/icons';
import {EditIcon} from '../../generic components/EditIcon';

/**
 * Renders the subreddit banner.
 * @param {string} props.name - The name of the subreddit.
 * @param {string} props.profilePictureSrc - The source of the profile picture.
 * @param {string} props.coverSrc - The source of the cover image.
 * @param {string} props.membersCount - The number of members in the subreddit.
 * @param {string} props.onlineCount - The number of members online in the subreddit.
 * @param {boolean} props.isUserView - The flag to check if the user is viewing the feed.
 * @return {JSX.Element} The rendered component.
 */
export function SubredditBanner({
    name,
    profilePictureSrc,
    coverSrc,
    membersCount,
    onlineCount,
    isUserView,
}) {
    // states
    const [isJoined, setIsJoined] = useState(false);
    const [isNotificationOptionsVisible, setIsNotificationOptionsVisible] = React.useState(false);
    const [isOtherOptionsVisible, setIsOtherOptionsVisible] = React.useState(false);
    const [activeNotification, setActiveNotification] = React.useState('notification');
    const [isMuted, setIsMuted] = React.useState(false);
    const [isFavourite, setIsFavourite] = React.useState(false);

    // constants
    const isNotificationsVisible = isJoined;

    // icons
    const OnlineIcon = getIconComponent('online', true);
    const PlusIconFill = getIconComponent('plus', true);
    const OverflowHorizontalIconOutline = getIconComponent('overflow-horizontal', false);
    const NotificationIcon = getIconComponent(activeNotification, true);


    // functions
    /**
     * Handles the click event on the notification button.
     */
    function handleNotificationClick() {
        setIsNotificationOptionsVisible((prevState) => !prevState);
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
                if (activeNotification !== 'Low') setActiveNotification('Low');
            }
            return;
        }

        if (isJoined) {
            // TODO: handle leave
            setIsJoined(false);
        } else {
            // TODO: handle join
            setIsJoined(true);
            if (activeNotification !== 'Low') setActiveNotification('Low');
        }
    }


    /**
     * Handles the click event on the mod tools button.
     * @return {void}
     * */
    function handleModToolsClick() {
        window.open(`https://www.reddit.com/r/${name}/about/modqueue`, '_blank');
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
        setActiveNotification(item);
    }

    return (
        <div className="my-2 flex h-56 w-full flex-col items-center rounded-lg max-[1024px]:m-0">
            <div className="relative w-full overflow-hidden rounded-lg bg-[#d3d3d3]">
                {isUserView && <EditIcon onClick={() => {
                    alert('asdasd');
                }
                }/>}
                <img src={coverSrc ? coverSrc : ''}
                    alt="Subreddit Cover" className='size-full object-cover object-center'/>
            </div>
            <div className="relative bottom-0 flex w-[95%] flex-col items-start justify-start
            lg:bottom-[26%] lg:flex-row lg:items-end lg:justify-between">
                <div className="mt-2 flex flex-row items-center justify-center">
                    <div className="relative -top-2 size-28
                    max-[1024px]:size-12 max-[1024px]:self-end max-[1024px]:border-0">
                        <img src={profilePictureSrc} alt="Subreddit profile picture"
                            className='size-full rounded-[50%] border-[5px] border-solid border-[#181100]
                            max-[1024px]:mr-2  max-[1024px]:border-transparent'/>
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
                    {isNotificationsVisible && (
                        <button className='ml-2 flex w-[45px]
                        items-center justify-center rounded-[50%] border-2 border-solid border-[#777777] bg-transparent
                         p-2.5 text-white hover:border-white'
                        onClick={handleNotificationClick}
                        style={{position: 'relative'}}>
                            {<NotificationIcon/>}
                            {isNotificationOptionsVisible && <NotificationsDropdownMenu activeItem={activeNotification}
                                onItemClick={handleNotificationItemClick}/>}
                        </button>
                    )}
                    {
                        !isUserView && (
                            <button className={`${isJoined ?
                                'border-2 border-solid border-[#777777] bg-transparent text-white hover:border-white' :
                                'border-solid border-[#564b27] bg-[#564b27] text-[white] hover:bg-[#857541]'}
                                 mx-2 rounded-3xl px-5 py-2`}
                            onClick={handleJoinClick}>
                                {isJoined ? 'Joined' : 'Join'}
                            </button>
                        )
                    }
                    {isUserView && (
                        <button className={`border-solid border-[#564b27] bg-[#564b27] text-[white] hover:bg-[#857541]
                         mx-2 rounded-3xl px-5 py-2`}
                        onClick={handleModToolsClick}>
                            Mod Tools
                        </button>
                    )}
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
    coverSrc: PropTypes.string,
    membersCount: PropTypes.string.isRequired,
    onlineCount: PropTypes.string.isRequired,
    isUserView: PropTypes.bool,
};

SubredditBanner.defaultProps = {
    coverSrc: '',
    isUserView: false,
};
