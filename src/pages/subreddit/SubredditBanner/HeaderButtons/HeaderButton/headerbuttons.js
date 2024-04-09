import React from 'react';
import {JoinButton} from '../JoinButton/joinbutton.js';
import {NotificationFrequencyControl} from '../NotificationFrequencyControl/notificationfrequencycontrol.js';
import {OverflowControl} from '../OverflowControl/overflowcontrol.js';
import {useHeaderButtons} from './headerbuttons.hooks.js';
import {classes} from './headerbuttons.styles.js';


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
