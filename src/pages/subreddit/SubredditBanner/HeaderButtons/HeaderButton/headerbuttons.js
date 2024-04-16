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
        isJoinDisabled,
    } = useHeaderButtons();

    if (!handleMuteClick) return null;

    return (
        <div data-testid="outer-div">
            <div className={classes.container} data-testid="container">
                {isSubscribed && (
                    <NotificationFrequencyControl
                        notificationLevel={activeNotificationLevel}
                        setNotificationLevel={setActiveNotificationLevel}
                        data-testid="notification-frequency-control"
                    />
                )}
                <JoinButton
                    subscribeLabel="Join"
                    unSubscribeLabel="Joined"
                    handleJoinClick={handleJoinClick}
                    isSubscribed={isSubscribed}
                    isDisabled={isJoinDisabled}
                    data-testid="join-button"
                />
                <OverflowControl
                    onFavouriteClick={handleFavouriteClick}
                    isFavourite={isFavourite}
                    onMuteClick={handleMuteClick}
                    isMuted={isMuted}
                    data-testid="overflow-control"
                />
            </div>
        </div>
    );
}
