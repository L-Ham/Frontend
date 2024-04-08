import React from 'react';
import {JoinButton} from '../JoinButton/joinbutton';
import {NotificationFrequencyControl} from '../NotificationFrequencyControl/notificationfrequencycontrol';
import {OverflowControl} from '../OverflowControl/overflowcontrol';
import {useHeaderButtons} from './headerbuttons.hooks';
import {classes} from './headerbuttons.styles';


/**
 * HeaderButtons component
 * @component
 * @return {JSX.Element} The HeaderButtons component
 */
export function HeaderButtons() {
    const {
        activeNotificationLevel,
        setActiveNotificationLevel,
        isMuted,
        handleMuteClick,
        isFavourite,
        handleFavouriteClick,
        isSubscribed,
        handleJoinClick,
    } = useHeaderButtons();

    if (!handleMuteClick) return null;

    return (
        <div>
            <div className={classes.container}>
                {isSubscribed && (
                    <NotificationFrequencyControl
                        notificationLevel={activeNotificationLevel}
                        setNotificationLevel={setActiveNotificationLevel}
                    />
                )}
                <JoinButton
                    subscribeLabel="Join"
                    unSubscribeLabel="Joined"
                    handleJoinClick={handleJoinClick}
                    isSubscribed={isSubscribed}
                />
                <OverflowControl
                    onFavouriteClick={handleFavouriteClick}
                    isFavourite={isFavourite}
                    onMuteClick={handleMuteClick}
                    isMuted={isMuted}
                />
            </div>
        </div>
    );
}
